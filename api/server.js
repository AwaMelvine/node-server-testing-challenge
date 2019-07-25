const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome' });
});

app.get('*', (req, res) => {
    res.status(404).json({ message: 'Page Not Found' });
});

module.exports = app;