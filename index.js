// reqs
const express = require('express');
const https = require('https');
const Tenor = require("tenorjs").client({
  "Key": "",
    "Filter": "high", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
})

// app setup
const app = express();

//middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// routes
app.get('/', (req, res) => {
  term = ""
  if (req.query.term) {
    term = req.query.term
  }
  Tenor.Search.Query(term, 10)
    .then(response => {
      const gifs = response;
      res.render('home', { gifs })
    }).catch(console.error);
});

app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.render('greeting', { name });
});

//start server

app.listen(3000, () => {
  console.log('GifSearch is Up and Running');
});