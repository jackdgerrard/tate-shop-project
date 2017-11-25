//Constants for use throughtout the app

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(':memory:')
const db = new sqlite3.Database('database.db')



class artists{

  static showAllArtists() {
    db.all('SELECT * FROM ARTISTS')
  }


}



//close the database
db.close()

//export the database when this whole method is called
export db;