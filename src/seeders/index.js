const dotenv = require('dotenv');
dotenv.config();

const sqlite3 = require('sqlite3').verbose();
const sqlite = require('sqlite');
const path = require('path');
const fs = require('fs');

const seedGames = require('./games.seeder.js');
const seedPlayers = require('./players.seeder.js');
const seedTournaments = require('./tournaments.seeder.js');

const { games, players, tournaments } = require('../assets');

// Use `/tmp/` for SQLite in Vercel, otherwise store locally
const isVercel = process.env.VERCEL === "1";
const dbPath = isVercel ? '/tmp/database.sqlite' : path.join(__dirname, '../database/database.sqlite');

// Log the path to ensure it's using the correct one
console.log(`📌 Using database path: ${dbPath}`);

// Ensure DB file exists (only create on Vercel or if DB doesn't exist locally)
if (isVercel && !fs.existsSync(dbPath)) {
  console.log("📂 Creating new SQLite database in /tmp/...");
}

// Connect to SQLite
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error(`❌ Error opening database: ${err.message}`);
  } else {
    console.log(`✅ Connected to SQLite database at: ${dbPath}`);
  }
});

// Seed data
seedGames(db, games, () => {
  seedPlayers(db, players, () => {
    seedTournaments(db, tournaments, () => {
      // Close DB connection
      db.close((err) => {
        if (err) console.error(`❌ Error closing database: ${err.message}`);
        else console.log('✅ Database connection closed.');
      });
    });
  });
});
