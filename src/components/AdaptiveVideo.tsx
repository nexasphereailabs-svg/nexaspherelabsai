import { useEffect, useMemo, useState, type SyntheticEvent, type VideoHTMLAttributes } from "react";

type VideoQuality = "low" | "medium" | "high";

type AdaptiveVideoSource = {
  quality: VideoQuality;
  src: string;
  type?: string;
};

interface NetworkInformation {
  effectiveType?: string;
  downlink?: number;
  addEventListener?: (type: string, listener: () => void) => void;
  removeEventListener?: (type: string, listener: () => void) => void;
}

interface AdaptiveVideoProps
  extends Omit<VideoHTMLAttributes<HTMLVideoElement>, "src" | "preload"> {
  sources: AdaptiveVideoSource[];
  poster: string;
  autoPlay?: boolean;
  loop?: boolean;
}

const chooseQuality = (effectiveType?: string, downlink?: number): VideoQuality => {
  if (effectiveType === "slow-2g" || effectiveType === "2g" || (downlink ?? 10) < 1.5) {
    return "low";
  }

  if (effectiveType === "3g" || (downlink ?? 10) < 4) {
    return "medium";
  }

  return "high";
};

const getConnection = (): NetworkInformation | null => {
  const nav = navigator as Navigator & { connection?: NetworkInformation };
  return nav.connection ?? null;
};

export default function AdaptiveVideo(props: AdaptiveVideoProps) {
  const { sources, poster, autoPlay = true, loop = false, className = "", onLoadedData, ...rest } = props;
  const [quality, setQuality] = useState<VideoQuality>("high");
  const [isLoaded, setIsLoaded] = useState(false);

  const selectedSource = useMemo(
    () => sources.find((source) => source.quality === quality) ?? sources[0],
    [quality, sources]
  );

  useEffect(() => {
    const connection = getConnection();
    const updateQuality = () => {
      const effectiveType = connection?.effectiveType;
      const downlink = connection?.downlink;
      setQuality(chooseQuality(effectiveType, downlink));
    };

    updateQuality();

    if (connection?.addEventListener) {
      connection.addEventListener("change", updateQuality);
      return () => connection.removeEventListener("change", updateQuality);
    }
  }, [sources]);

  const handleLoadedData = (event: SyntheticEvent<HTMLVideoElement, Event>) => {
    setIsLoaded(true);
    onLoadedData?.(event);
  };

  const shouldAutoPlay = autoPlay && quality !== "low";
  const preload = quality === "low" ? "metadata" : "auto";

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-900">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
          <div className="flex flex-col items-center gap-4">
            <div className="w-10 h-10 rounded-full border-2 border-brand-violet/20 border-t-brand-violet animate-spin" />
            <span className="text-slate-400 text-[10px] font-bold tracking-[0.2em] uppercase">Loading</span>
          </div>
        </div>
      )}

      <video
        src={selectedSource.src}
        poster={poster}
        autoPlay={shouldAutoPlay}
        loop={loop}
        muted
        playsInline
        preload={preload}
        onLoadedData={handleLoadedData}
        className={`${className} block transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        {...rest}
      >
        {sources.map((source) => (
          <source key={source.quality} src={source.src} type={source.type ?? "video/mp4"} />
        ))}
      </video>
    </div>
  );
}
