export default function VideoPlayer({ videoId }) {
  if (!videoId) return null;
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="player mt-4">
      <iframe
        width="100%"
        height="480"
        src={src}
        title="YouTube player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
