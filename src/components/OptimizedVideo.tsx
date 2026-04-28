import { useState, useEffect, useRef } from "react";

interface OptimizedVideoProps {
  src: string;
  poster?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  showLoading?: boolean;
  onLoaded?: () => void;
}


export default function OptimizedVideo({
  src,
  poster,
  className,
  autoPlay = true,
  loop = false,
  muted = false,
  controls = false,
  showLoading = true,
  onLoaded
}: OptimizedVideoProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(autoPlay);
  const [preloadStrategy, setPreloadStrategy] = useState<"auto" | "metadata" | "none">("auto");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Check network connection speed if available
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
    
    if (connection) {
      const isSlow = connection.saveData || (connection.effectiveType && ['slow-2g', '2g', '3g'].includes(connection.effectiveType));
      
      if (isSlow) {
        console.log("Slow network detected: optimizing video delivery.");
        // setShouldAutoPlay(false); // Disable autoplay to save data
        setPreloadStrategy("metadata"); // Only load metadata
      } else {
        setShouldAutoPlay(autoPlay);
        setPreloadStrategy("auto");
      }
    }
  }, [autoPlay]);

  const handleLoadedData = () => {
    setIsVideoLoaded(true);
    if (onLoaded) onLoaded();
  };

  return (
    <div className="relative w-full h-full bg-slate-900 group flex items-center justify-center">
      {/* Loading Visual */}
      {showLoading && !isVideoLoaded && (
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
        src={src}
        poster={poster}
        autoPlay={shouldAutoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        preload={preloadStrategy}
        onLoadedData={handleLoadedData}
        className={`${className} transition-opacity duration-1000 ${(isVideoLoaded || !showLoading) ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Play overlay for slow networks where autoplay is disabled */}
      {!shouldAutoPlay && !isVideoLoaded && !controls && (
        <div 
          className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer bg-black/20"
          onClick={() => videoRef.current?.play()}
        >
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:scale-110 transition-transform">
             <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      )}
    </div>
  );
}
