const express = require('express');
const cors = require('cors');
const searchRouter = require('./routes/search');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/search', searchRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
