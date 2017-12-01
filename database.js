//Constants for use throughtout the app

const sqlite3 = require('sqlite3').verbose()
db = new sqlite3.Database('database.db')

/********************************
  ARTISTS class
 ******************************/

class artists {
  static all(cb) { // get all artists
    db.all('SELECT * FROM ARTISTS limit 100', cb)
  }

}
/*******************************************************************
 ** ARTWORK class same functions as above
 **********************************************************************/

class artwork {
    static all(cb) { // get all artwork
      db.all('SELECT * FROM artwork limit 100', cb)
    }

  } // end artwork class
/*******************************************************************
 ** USERS class same functions as above
 **********************************************************************/
  class users {

        static all(cb) { // get all users
          db.all('SELECT * FROM users', cb)
        }

        static addUser(cb) { // add new user json object to database in string format
          db.put('Insert user  into  users(jsonObject.toString())', cb)
        }

        static getUser(cb) { // add new user json object to database in string format
          db.get('select  users from  users(jsonObject.toString())', cb)
        }



      }



/******************
 * EXPORTS
 ****************/

module.exports.artists = artists
module.exports.artwork = artwork
module.exports.users = users


//close the database
//db.close()
