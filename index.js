// reqs
const express = require('express');

// app setup
const app = express();

//middleware
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// routes
app.get('/', (req, res) => {
  console.log(req.query)
  res.render('Home')
});

app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.render('greeting', { name });
});

//start server

app.listen(5000, () => {
  console.log('GifSearch is Up and Running');
});