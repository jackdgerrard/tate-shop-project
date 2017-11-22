const express = require('express');
const app = express();
const PORT = 3333;

 /*
 *SET STATIC FILES DIRECTORY
 */

app.use(express.static('public'));

app.set('view engine', 'pug');

app.get(app.get('/', function (req, res) {
   res.render('index')
 }))

 app.get(app.get('/art', function (req, res) {
  res.render('art')
}))


app.get(app.get('/basket', function (req, res) {
  res.render('basket')
}))

app.get(app.get('/log-in', function (req, res) {
  res.render('log-in')
}))

 app.listen(PORT, () => console.log('go to http:/localhost:'+PORT))
