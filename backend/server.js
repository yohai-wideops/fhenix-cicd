const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow frontend requests

app.get('/api/env', (req, res) => {
    res.json({ BG_COLOR: process.env.BG_COLOR || "white" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
