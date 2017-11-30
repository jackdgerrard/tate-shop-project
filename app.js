/*
 * EXPRESS CONSTANTS - for cleaner syntax
 */
const express = require('express');
const app = express();

/*
 * DATABASE CONSTANTS - for cleaner syntax in render function further down
 */

const artists = require('./database').artists;
const artwork = require('./database').artwork;

/*
 * SET EXPRESS SETTINGS - port number, viewengine(jade/pug), static resources(css, javascript)
 */
//CHANGE THIS IF 3000 IN USE
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.use(express.static('public'));

/*
 * INDEX - different ways to get to home page
 */
app.get('/', function (req, res) {
  res.render('index')
})

app.get('/index', function (req, res) {
  res.render('index')
})

app.get('/admin', function (req, res) {
  res.render('admin')
})

/*
 * GET ALL ARTISTS - renders artists pug template and passes the artists from the database into it
 */
app.get('/artists', (req, res, next) => {
  artists.all((err, artists) => {
    if (err) return next(err);
    res.render('artists.pug', {
      artists: artists
    }); // this is why we set the const further up
  });
});

/*
 * GET ALL ARTWORK - renders artwork pug template and passes the artwork from the database into it
 */
app.get('/artwork', (req, res, next) => {
  artwork.all((err, artwork) => {
    if (err) return next(err);
    res.render('artwork.pug', {
      artwork: artwork
    }); // this is why we set the const further up
  });
});

app.get('/basket', function (req, res) {
  res.render('basket')
})

app.get('/log-in', function (req, res) {
  res.render('log-in')
})

/*
 * USERS - log in or create account
 */
app.get('/users', function (req, res) {
  res.render('users')
})

/*
 * LAUNCH APP - listen on port set further up, also has node/nodemon print the url to go to for testing/inspection
 */
app.listen(app.get('port'), () => console.log('go to http://localhost:' + app.get('port')))