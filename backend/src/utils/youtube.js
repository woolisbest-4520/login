const fetch = require('node-fetch');

const API_KEY = process.env.YT_API_KEY;
const BASE = 'https://www.googleapis.com/youtube/v3';

async function youtubeSearch(q, pageToken = '') {
  const params = new URLSearchParams({
    part: 'snippet',
    q,
    type: 'video',
    maxResults: '10',
    key: API_KEY,
  });
  if (pageToken) params.append('pageToken', pageToken);

  const url = `${BASE}/search?${params.toString()}`;
  const r = await fetch(url);
  if (!r.ok) throw new Error('youtube_api_error');
  const json = await r.json();
  return json;
}

module.exports = { youtubeSearch };
