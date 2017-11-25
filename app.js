/*
* EXPRESS CONSTANTS
 */

const express = require('express');
const app = express();

/*
* DATABASE CONSTANTS
*/

const artists = require('./database').artists;
const artwork = require('./database').artwork;


 /*
 *SET EXPRESS SETTINGS
 */

app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'pug');


app.use(express.static('public'));

/*
* INDEX
*/
app.get('/', function (req, res) {
   res.render('index')
 })

 app.get('/index', function (req, res) {
  res.render('index')
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

/*
* GET ALL ARTWORK
*/

app.get('/artwork',(req, res, next) => {
  artwork.all((err, artists) => {
    if (err) return next (err);
    res.render('artwork.pug', {artwork:artwork});
  });
});




app.get('/basket', function (req, res) {
  res.render('basket')
})

app.get('/log-in', function (req, res) {
  res.render('log-in')
})

app.listen(app.get('port'), () => console.log('go to http://localhost:'+app.get('port')))
