// Dependencies
const express = require('express');
const { Server } = require('http');
const path = require('path');
const fs = require('fs');


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

app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, './db/db.json')));


app.post('/api/notes', (req, res) => {
    const newSavedNote = req.body;
    console.log(newSavedNote);
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, './db/db.json')));
    console.log(notes);
    notes.push(newSavedNote);
    console.log(notes);
    fs.writeFile('./db/db.json', JSON.stringify(notes), function(err, result) {
        if(err) console.log('error', err)
    });
    return res.json({});

})

app.delete()

app.listen(PORT, () => console.log(`App listening on ${PORT}`));