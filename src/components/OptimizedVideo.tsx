import { useState, useEffect, useRef } from "react";

interface VideoSource {
  src: string;
  type?: string;
  quality?: "low" | "medium" | "high";
}

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  onLoaded?: () => void;
  lowQualitySrc?: string;
  sources?: VideoSource[];
}

export default function OptimizedVideo({
  src,
  poster,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
  onLoaded,
  lowQualitySrc,
  sources,
}: OptimizedVideoProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(autoPlay);
  const [preloadStrategy, setPreloadStrategy] = useState<"auto" | "metadata" | "none">("auto");
  const [isInView, setIsInView] = useState(false);
  const [useLowQuality, setUseLowQuality] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    const isSlow = connection
      ? connection.saveData || (connection.effectiveType && ['slow-2g', '2g', '3g'].includes(connection.effectiveType))
      : false;

    if (isSlow) {
      console.log("Slow network detected: optimizing video delivery.");
      setShouldAutoPlay(false);
      setPreloadStrategy("metadata");
      setUseLowQuality(Boolean(lowQualitySrc));
    } else {
      setShouldAutoPlay(autoPlay);
      setPreloadStrategy("auto");
      setUseLowQuality(false);
    }
  }, [autoPlay, lowQualitySrc]);

  useEffect(() => {
    if (!containerRef.current || !('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      videoRef.current?.load();
    }
  }, [isInView, useLowQuality, src, lowQualitySrc, sources]);

  const handleLoadedData = () => {
    setIsVideoLoaded(true);
    if (onLoaded) onLoaded();
  };

  const sourceList = sources && sources.length > 0 ? sources : undefined;
  const filteredSources = sourceList
    ? sourceList.filter((source) => {
        if (useLowQuality) {
          return source.quality === "low" || !source.quality;
        }
        return source.quality !== "low";
      })
    : undefined;
  const effectiveSources = filteredSources && filteredSources.length > 0 ? filteredSources : sourceList;
  const primarySource = useLowQuality && lowQualitySrc ? lowQualitySrc : src;

  return (
    <div ref={containerRef} className="relative w-full h-full bg-slate-900 group">
      {!isVideoLoaded && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-brand-violet/20 border-t-brand-violet animate-spin" />
            <span className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">Loading</span>
          </div>
        </div>
      )}

      <video
        ref={videoRef}
        poster={poster}
        autoPlay={shouldAutoPlay && isInView}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        preload={isInView ? preloadStrategy : "none"}
        onLoadedData={handleLoadedData}
        className={`${className} transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        {isInView && effectiveSources?.map((source) => (
          <source key={source.src} src={source.src} type={source.type ?? 'video/mp4'} />
        ))}
        {isInView && !effectiveSources && <source src={primarySource} type="video/mp4" />}
      </video>

      {!shouldAutoPlay && !isVideoLoaded && !controls && (
        <div
          className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer bg-black/20"
          onClick={() => videoRef.current?.play()}
        >
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:scale-110 transition-transform">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>
      )}
    </div>
  );
}
