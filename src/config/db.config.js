const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');

class Database {
  static dbInstance = null;

  static async connectToDb() {
    if (!Database.dbInstance) {
      try {
        Database.dbInstance = await sqlite.open({
          filename: 'src/database/database.sqlite',
          driver: sqlite3.Database,
        });
        console.log('Connected to DB Successfully!');
      } catch (error) {
        console.log(`Error in connecting to DB: ${error.message}`);
      }
    }
    return Database.dbInstance;
  }

  static async closeDbConnection() {
    if (Database.dbInstance) {
      try {
        await Database.dbInstance.close();
        Database.dbInstance = null;
        console.log('Database connection closed.');
      } catch (error) {
        console.log(`Failed in closing the connection : ${error.message}`);
      }
    }
  }
}

module.exports = Database;
