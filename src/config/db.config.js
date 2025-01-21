const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

class Database {
  static dbInstance = null;

  static async connectToDb() {
    if (!Database.dbInstance) {
      try {
        // Use `/tmp/` for SQLite in Vercel, otherwise store locally
        const isVercel = process.env.VERCEL === "1";
        const dbPath = isVercel ? '/tmp/database.sqlite' : path.join(__dirname, '../database/database.sqlite');

        console.log(`📌 Using database path: ${dbPath}`);

        // Open SQLite database (it will create the file if it doesn’t exist)
        Database.dbInstance = await sqlite.open({
          filename: dbPath,
          driver: sqlite3.Database,
        });

        console.log(`✅ Connected to DB Successfully at: ${dbPath}`);

      } catch (error) {
        console.error(`❌ Error in connecting to DB: ${error.message}`);
      }
    }
    return Database.dbInstance;
  }

  static async closeDbConnection() {
    if (Database.dbInstance) {
      try {
        await Database.dbInstance.close();
        Database.dbInstance = null;
        console.log('✅ Database connection closed.');
      } catch (error) {
        console.error(`❌ Failed in closing the connection: ${error.message}`);
      }
    }
  }
}

module.exports = Database;
