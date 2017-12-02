//Constants for use throughtout the app

const sqlite3 = require('sqlite3').verbose()
db = new sqlite3.Database('database.db')


/*******************************************************************
 ** ARTWORK class same functions as above
 **********************************************************************/

class artwork {
    static all(cb) { // get all artwork, remove or edit limit as needed
      db.all('SELECT * FROM artwork limit 100', cb)
    }

    static artists(cb) { // get all artwork, arrange it by artist, remove or edit limit as needed
      db.all('SELECT * FROM artwork order by artist limit 100', cb)
    }

    static price(cb){
      db.all('SELECT * FROM artwork order by price limit 600', cb)
    }



  } // end artwork class

/*******************************************************************
 ** USERS class same functions as above
 **********************************************************************/
  class users {

        static all(cb) { // get all users
          db.all('SELECT * FROM users', cb)
        }

        static delete(id, cb){
          if (!id) return cb(new error('please provide an id'));
          db.run('delete from usersTable where userID = ?', id, cb)
        }

        static add(userObject, cb){
          //convert JsonObject to String
          let StringToAdd  = userObject.toString();
          db.run('insert into usersTable (userString) Values(StringToAdd', cb)
        }
      } // end of users



/******************
 * EXPORTS
 ****************/
module.exports.artwork = artwork
module.exports.users = users


//close the database
//db.close()


