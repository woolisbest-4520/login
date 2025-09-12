export default function VideoList({ videos, onSelect }) {
  if (!videos.length) return <p>検索結果がありません。</p>;

  return (
    <div className="col-span-3 grid grid-cols-3 gap-4">
      {videos.map(v => (
        <div
          key={v.id.videoId}
          className="cursor-pointer border p-2 rounded hover:bg-gray-100"
          onClick={() => onSelect(v)}
        >
          <img src={v.snippet.thumbnails.medium.url} alt={v.snippet.title} />
          <p className="mt-1 text-sm font-semibold">{v.snippet.title}</p>
          <p className="text-xs text-gray-600">{v.snippet.channelTitle}</p>
        </div>
      ))}
    </div>
  );
}
