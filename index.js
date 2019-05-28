// reqs
const express = require('express');

// app setup
const app = express();

//middleware

// routes
app.get('/', (req, res) => {
  res.send('Hello Squirrel');
});

//start server

app.listen(5000, () => {
  console.log('GifSearch is Up and Running');
});