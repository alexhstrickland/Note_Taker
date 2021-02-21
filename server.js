// Dependencies
const express = require('express');
const { Server } = require('http');
const path = require('path');
const db = require('./db/db.json');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 4040;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Get routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '/public/notes.html')));

app.get('/api/notes', (req, res) => res.json(db));

app.post('/api/notes', (req, res) => {
    const newSavedNote = req.body;
    console.log(newSavedNote);
})

app.listen(PORT, () => console.log(`App listening on ${PORT}`));