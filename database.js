//Constants for use throughtout the app

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db')

class artists{

  static all(cb) {
    db.all('SELECT * FROM ARTISTS', cb)
  }

  static find(id, cb){
    db.get('SELECT * FROM ARTISTS WHERE ID=?', id, cb)
  }
}

class artwork{

    static all(cb){
      db.all('SELECT * FROM ARTWORK', cb)
    }

    static find(id, cb){
      db.get('SELECT * FROM ARTWORK WHERE ID=?', id, cb)
    }
  }

//close the database
//db.close()

/*
* EXPORTS
*/

module.exports = db;
module.exports.artists=artists;
module.exports.artwork=artwork;

