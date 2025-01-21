const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');
const path = require('path');
const fs = require('fs');

class Database {
  static dbInstance = null;

  static async connectToDb() {
    if (!Database.dbInstance) {
      try {
        // Determine the correct database path
        const isVercel = process.env.VERCEL === "1";
        const localDbPath = path.join(__dirname, 'database.sqlite');
        const vercelDbPath = '/tmp/database.sqlite';
        const dbPath = isVercel ? vercelDbPath : localDbPath;

        // If running on Vercel, ensure database exists in /tmp/
        if (isVercel) {
          if (!fs.existsSync(vercelDbPath) && fs.existsSync(localDbPath)) {
            fs.copyFileSync(localDbPath, vercelDbPath);
          }
        }

        Database.dbInstance = await sqlite.open({
          filename: dbPath,
          driver: sqlite3.Database,
        });

        console.log(`Connected to DB Successfully at: ${dbPath}`);
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
        console.log(`Failed in closing the connection: ${error.message}`);
      }
    }
  }
}

module.exports = Database;
