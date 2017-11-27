//Constants for use throughtout the app

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('database.db')


/***********
** ARTISTS class
*////////////

class artists{

  static all(cb) { // get all artists
    db.all('SELECT * FROM ARTISTS', cb)
  }

  static find(id, cb){ //get artists with certain ID
    db.get('SELECT * FROM ARTISTS WHERE ID=?', id, cb)
  }

  static create(id, cb){ // create a new artist with tite and content, change this to match
    const sql = 'INSERT INTO ARTISTS (title, content) VALUES(?,?)'
    db.run(sql, data.title, data.content, cb)
  }

  static delete(id, cb){ // delete artist with ID passed in
    if (!id) return cb(new ERROR('please provide an ID'))
    db.run('delete from ARTISTS where id=?', id, cb)
  }

  /***********
  ** ARTWORKclass same functions as above
  *////////////

}

class artwork{

    static all(cb){
      db.all('SELECT * FROM ARTWORK', cb)
    }

    static find(id, cb){
      db.get('SELECT * FROM ARTWORK WHERE ID=?', id, cb)
    }

    static create(id, cb){
      const sql = 'INSERT INTO ARTWORK (title, content) VALUES(?,?)'
      db.run(sql, data.title, data.content, cb)
    }

    static delete(id, cb){
      if (!id) return cb(new ERROR('please provide an ID'))
      db.run('delete from ARTWORK where id=?', id, cb)
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
