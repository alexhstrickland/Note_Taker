// Dependencies
const express = require('express');
const path = require('path');
const htmlRoutes = ('./routes/htmlRoutes.js');
const notesRoutes = ('./routes/notesRoutes.js');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 4040;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var p = app.use(express.static(path.join(__dirname, "public")))
var x = app.use(express.static(__dirname/"public"));
console.log(x);
console.log(p);

app.listen(PORT, () => console.log(`App listening on ${PORT}`));