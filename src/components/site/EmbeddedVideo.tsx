type EmbeddedVideoProps = {
  src: string;
  title: string;
  small?: boolean;
};

export function EmbeddedVideo({
  src,
  title,
  small = false,
}: EmbeddedVideoProps) {
  return (
    <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
      <div className={`relative w-full overflow-hidden ${small ? "pb-[56.25%]" : "pb-[56.25%]"}`}>
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
        />
      </div>
    </div>
  );
}