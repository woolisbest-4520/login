import { useState } from 'react';
import VideoList from '../components/VideoList';
import VideoPlayer from '../components/VideoPlayer';

export default function Home() {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);

  async function onSearch(e) {
    e.preventDefault();
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await res.json();
    setVideos(data.items || []);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">YouTube 検索プレイヤー</h1>
      <form onSubmit={onSearch} className="mb-4">
        <input
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="検索ワード"
          className="border px-2 py-1 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
          検索
        </button>
      </form>

      <div className="grid grid-cols-3 gap-4">
        <VideoList videos={videos} onSelect={v => setSelected(v)} />
        {selected && (
          <div className="col-span-3">
            <VideoPlayer videoId={selected.id.videoId} />
          </div>
        )}
      </div>
    </div>
  );
}
