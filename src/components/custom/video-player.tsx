import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  title: string;
  isShort?: boolean;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  title,
  isShort = false,
  className,
}) => {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        isShort ? "aspect-[9/16]" : "aspect-video",
        className
      )}
    >
      <iframe
        src={src}
        title={title}
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full"
      />
    </div>
  );
};
