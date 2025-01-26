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
  const aspectRatio = isShort ? "9:16" : "16:9";
  const [width, height] = aspectRatio.split(":").map(Number);
  const ratio = (height / width) * 100;

  return (
    <div
      className={`relative w-full overflow-hidden ${className ?? ""}`}
      style={{ paddingTop: `${ratio}%` }}
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
