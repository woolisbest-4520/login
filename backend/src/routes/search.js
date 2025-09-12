const express = require('express');
const router = express.Router();
const { youtubeSearch } = require('../utils/youtube');

// GET /api/search?q=keyword&pageToken=...
router.get('/', async (req, res) => {
  try {
    const q = req.query.q || '';
    const pageToken = req.query.pageToken || '';
    const data = await youtubeSearch(q, pageToken);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'internal_error' });
  }
});

module.exports = router;
