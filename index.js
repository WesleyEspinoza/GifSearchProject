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
  const gifurl = 'https://media1.tenor.com/images/561c988433b8d71d378c9ccb4b719b6c/tenor.gif?itemid=10058245'
  res.render('hello-gif', { gifurl })
});

app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.render('greeting', { name });
});

//start server

app.listen(5000, () => {
  console.log('GifSearch is Up and Running');
});