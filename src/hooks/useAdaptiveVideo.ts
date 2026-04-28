import { useState, useEffect, useRef, useCallback } from "react";

export type VideoQuality = "auto" | "high" | "medium" | "low";

export interface VideoSource {
  src: string;
  quality: VideoQuality;
  label: string;
  bandwidth?: number; // approximate bitrate in kbps
}

export interface AdaptiveVideoState {
  currentQuality: VideoQuality;
  effectiveQuality: VideoQuality; // resolved quality when current is "auto"
  isSwitching: boolean;
  networkSpeed: number | null; // kbps
  bufferHealth: number; // seconds of buffered content ahead
  bufferedRanges: TimeRanges | null;
  suggestedSources: VideoSource[];
  selectQuality: (quality: VideoQuality) => void;
  registerVideoElement: (video: HTMLVideoElement | null) => void;
}

interface BufferStallEvent {
  time: number;
  duration: number;
  recovered: boolean;
}

const QUALITY_BANDWIDTH_THRESHOLDS: Record<Exclude<VideoQuality, "auto">, number> = {
  high: 5000,    // 5 Mbps for 1080p
  medium: 2500,  // 2.5 Mbps for 720p
  low: 800,      // 800 kbps for 480p
};

/**
 * Hook to manage adaptive video quality based on network conditions.
 * Does NOT modify autoplay, muted, or other existing video props.
 */
export function useAdaptiveVideo(
  sources: VideoSource[] | undefined,
  initialQuality: VideoQuality = "auto",
  updateIntervalMs: number = 8000
): AdaptiveVideoState {
  const [currentQuality, setCurrentQuality] = useState<VideoQuality>(initialQuality);
  const [effectiveQuality, setEffectiveQuality] = useState<VideoQuality>("auto");
  const [isSwitching, setIsSwitching] = useState(false);
  const [networkSpeed, setNetworkSpeed] = useState<number | null>(null);
  const [bufferHealth, setBufferHealth] = useState(0);
  const [bufferedRanges, setBufferedRanges] = useState<TimeRanges | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const speedHistoryRef = useRef<number[]>([]);
  const stallHistoryRef = useRef<BufferStallEvent[]>([]);
  const lastDownloadTimeRef = useRef<number>(0);
  const lastDownloadedBytesRef = useRef<number>(0);
  const measurementTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const rafRef = useRef<number>(0);

  /**
   * Measure current download speed using the video element's internal metrics.
   * Falls back to connection API if video metrics are unavailable.
   */
  const measureNetworkSpeed = useCallback(() => {
    const video = videoRef.current;
    if (!video) return null;

    let speedKbps: number | null = null;

    // Try to get bytes downloaded from video metrics (if available in some browsers)
    const getVideoBytes = () => {
      try {
        const perf = (video as any).getVideoPlaybackQuality?.();
        if (perf && typeof perf.totalVideoFrames === "number") {
          // Fallback heuristic: use buffered progress rate
        }
      } catch { /* ignore */ }
      return null;
    };
    getVideoBytes();

    // Method 1: Use Network Information API as baseline
    const connection = getNetworkConnection();
    if (connection?.downlink) {
      // downlink is in Mbps
      speedKbps = connection.downlink * 1000;
    }

    // Method 2: Estimate from buffer growth rate
    if (video.buffered.length > 0 && video.currentTime > 0) {
      const now = performance.now();
      const currentBuffered = getTotalBufferedSeconds(video);

      if (lastDownloadTimeRef.current > 0) {
        const timeDelta = (now - lastDownloadTimeRef.current) / 1000; // seconds
        const bytesDelta = estimateBufferedBytes(video, currentBuffered);

        if (timeDelta > 0 && bytesDelta > 0) {
          const instantSpeed = (bytesDelta * 8) / timeDelta; // bits per second
          speedKbps = Math.max(speedKbps || 0, instantSpeed / 1000);
        }
      }
      lastDownloadTimeRef.current = now;
    }

    // Method 3: Use effectiveType mapping as conservative estimate
    if (connection?.effectiveType && !speedKbps) {
      const estimates: Record<string, number> = {
        "slow-2g": 100,
        "2g": 250,
        "3g": 750,
        "4g": 5000,
      };
      speedKbps = estimates[connection.effectiveType] || 2000;
    }

    // Smooth with rolling average
    if (speedKbps && speedKbps > 0) {
      speedHistoryRef.current.push(speedKbps);
      if (speedHistoryRef.current.length > 5) {
        speedHistoryRef.current.shift();
      }
      const avgSpeed = speedHistoryRef.current.reduce((a, b) => a + b, 0) / speedHistoryRef.current.length;
      return Math.round(avgSpeed);
    }

    return speedKbps;
  }, []);

  /**
   * Determine the best quality level based on current network conditions
   * and buffer stall history.
   */
  const resolveQuality = useCallback((): VideoQuality => {
    const speed = networkSpeed;
    const connection = getNetworkConnection();

    // Respect user's save-data preference
    if (connection?.saveData) {
      return "low";
    }

    // If no speed measurement yet, use connection type
    if (speed === null) {
      if (connection?.effectiveType) {
        const map: Record<string, VideoQuality> = {
          "slow-2g": "low",
          "2g": "low",
          "3g": "medium",
          "4g": "high",
        };
        return map[connection.effectiveType] || "medium";
      }
      return "medium";
    }

    // Check recent stall history - if we've stalled recently, be more conservative
    const recentStalls = stallHistoryRef.current.filter(
      (s: BufferStallEvent) => Date.now() - s.time < 30000 // last 30 seconds
    );
    const hasRecentStalls = recentStalls.length > 0;
    const avgStallDuration = recentStalls.length > 0
      ? recentStalls.reduce((sum: number, s: BufferStallEvent) => sum + s.duration, 0) / recentStalls.length
      : 0;

    // Apply safety margin based on stall history
    const safetyMultiplier = hasRecentStalls
      ? Math.max(0.5, 1 - avgStallDuration / 10000)
      : 1.0;

    const effectiveSpeed = speed * safetyMultiplier;

    // Require ~1.5x the bitrate for stable playback (buffer headroom)
    if (effectiveSpeed >= QUALITY_BANDWIDTH_THRESHOLDS.high * 1.5) {
      return "high";
    }
    if (effectiveSpeed >= QUALITY_BANDWIDTH_THRESHOLDS.medium * 1.5) {
      return "medium";
    }
    return "low";
  }, [networkSpeed]);

  /**
   * Select source URL for the given quality level.
   */
  const getSourceForQuality = useCallback(
    (quality: VideoQuality): string | undefined => {
      if (!sources || sources.length === 0) return undefined;

      if (quality === "auto") {
        const resolved = resolveQuality();
        return sources.find((s) => s.quality === resolved)?.src ?? sources[0].src;
      }

      return sources.find((s) => s.quality === quality)?.src ?? sources[0].src;
    },
    [sources, resolveQuality]
  );

  /**
   * Monitor buffer health continuously.
   */
  const updateBufferHealth = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    const buffered = getTotalBufferedSeconds(video);
    setBufferHealth(buffered);
    setBufferedRanges(video.buffered);
  }, []);

  /**
   * Handle quality switching with position preservation.
   */
  const performQualitySwitch = useCallback(
    (targetQuality: VideoQuality) => {
      const video = videoRef.current;
      if (!video || !sources || sources.length < 2) return;

      const newSrc = getSourceForQuality(targetQuality);
      if (!newSrc || newSrc === video.currentSrc) return;

      const currentTime = video.currentTime;
      const wasPaused = video.paused;

      setIsSwitching(true);

      // Preserve playback state
      video.src = newSrc;
      video.load();

      const onCanPlay = () => {
        video.currentTime = currentTime;
        if (!wasPaused) {
          video.play().catch(() => {
            // Autoplay may be blocked, that's fine - preserve pause state
          });
        }
        setIsSwitching(false);
        video.removeEventListener("canplay", onCanPlay);
      };

      video.addEventListener("canplay", onCanPlay);
    },
    [sources, getSourceForQuality]
  );

  // Network monitoring interval
  useEffect(() => {
    const measure = () => {
      const speed = measureNetworkSpeed();
      if (speed !== null) {
        setNetworkSpeed(speed);
      }
    };

    measure(); // initial measurement
    measurementTimerRef.current = setInterval(measure, updateIntervalMs);

    return () => {
      if (measurementTimerRef.current) {
        clearInterval(measurementTimerRef.current);
      }
    };
  }, [measureNetworkSpeed, updateIntervalMs]);

  // Buffer health monitoring via requestAnimationFrame
  useEffect(() => {
    const tick = () => {
      updateBufferHealth();
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafRef.current);
  }, [updateBufferHealth]);

  // Monitor for buffer stalls (waiting event)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let stallStartTime = 0;

    const onWaiting = () => {
      stallStartTime = Date.now();
    };

    const onPlaying = () => {
      if (stallStartTime > 0) {
        const duration = Date.now() - stallStartTime;
        stallHistoryRef.current.push({
          time: Date.now(),
          duration,
          recovered: true,
        });
        // Keep only last 10 stalls
        if (stallHistoryRef.current.length > 10) {
          stallHistoryRef.current.shift();
        }
        stallStartTime = 0;
      }
    };

    video.addEventListener("waiting", onWaiting);
    video.addEventListener("playing", onPlaying);
    video.addEventListener("stalled", onWaiting);

    return () => {
      video.removeEventListener("waiting", onWaiting);
      video.removeEventListener("playing", onPlaying);
      video.removeEventListener("stalled", onWaiting);
    };
  }, []);

  // Auto-resolve quality when in "auto" mode
  useEffect(() => {
    if (currentQuality === "auto") {
      const resolved = resolveQuality();
      setEffectiveQuality(resolved);
      performQualitySwitch(resolved);
    } else {
      setEffectiveQuality(currentQuality);
      performQualitySwitch(currentQuality);
    }
  }, [currentQuality, networkSpeed, resolveQuality, performQualitySwitch]);

  const selectQuality = useCallback((quality: VideoQuality) => {
    setCurrentQuality(quality);
  }, []);

  const registerVideoElement = useCallback((video: HTMLVideoElement | null) => {
    videoRef.current = video;
  }, []);

  // Sort sources by quality preference for UI
  const qualityOrder: VideoQuality[] = ["high", "medium", "low"];
  const suggestedSources = sources
    ? [...sources].sort(
        (a: VideoSource, b: VideoSource) =>
          qualityOrder.indexOf(a.quality) - qualityOrder.indexOf(b.quality)
      )
    : [];

  return {
    currentQuality,
    effectiveQuality,
    isSwitching,
    networkSpeed,
    bufferHealth,
    bufferedRanges,
    suggestedSources,
    selectQuality,
    registerVideoElement,
  };
}

// ─── Helpers ────────────────────────────────────────────────────────────

function getNetworkConnection() {
  const nav = navigator as any;
  return nav.connection || nav.mozConnection || nav.webkitConnection;
}

function getTotalBufferedSeconds(video: HTMLVideoElement): number {
  if (video.buffered.length === 0) return 0;
  const current = video.currentTime;
  let total = 0;
  for (let i = 0; i < video.buffered.length; i++) {
    const start = video.buffered.start(i);
    const end = video.buffered.end(i);
    if (end > current) {
      total += Math.max(0, end - Math.max(start, current));
    }
  }
  return total;
}

/**
 * Rough byte estimation based on buffered duration and assumed bitrate.
 * This is an approximation since we don't know the exact bitrate.
 */
function estimateBufferedBytes(video: HTMLVideoElement, bufferedSeconds: number): number {
  // Estimate bitrate from video resolution if available
  const width = video.videoWidth || 1920;
  const height = video.videoHeight || 1080;

  // Very rough bitrate estimates by resolution (bits per pixel per frame, ~30fps)
  const pixels = width * height;
  let bitsPerSecond: number;

  if (pixels >= 1920 * 1080) {
    bitsPerSecond = 5_000_000; // ~5 Mbps for 1080p
  } else if (pixels >= 1280 * 720) {
    bitsPerSecond = 2_500_000; // ~2.5 Mbps for 720p
  } else {
    bitsPerSecond = 1_000_000; // ~1 Mbps for 480p
  }

  return (bitsPerSecond / 8) * bufferedSeconds;
}

