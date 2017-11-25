/*
* EXPRESS CONSTANTS
 */

const express = require('express');
const app = express();

/*
* DATABASE CONSTANTS
*/

const artists = require('./database').artists;


 /*
 *SET STATIC FILES DIRECTORY
 */

app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'pug');


app.use(express.static('public'));


app.get('/', function (req, res) {
   res.render('index')
 })

app.get('/art', function (req, res) {
  res.render('art')
})

/*
* GET ALL ARTISTS
*/

app.get('/artists',(req, res, next) => {
  artists.all((err, artists) => {
    if (err) return next (err);
    res.render('artists.pug', {artists:artists});
  });


});




app.get('/basket', function (req, res) {
  res.render('basket')
})

app.get('/log-in', function (req, res) {
  res.render('log-in')
})

app.listen(app.get('port'), () => console.log('go to http:/localhost:'+app.get('port')))
