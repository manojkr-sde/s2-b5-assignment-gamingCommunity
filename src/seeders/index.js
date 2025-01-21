const sqlite3 = require('sqlite3').verbose();

const seedGames = require('./games.seeder.js');
const seedPlayers = require('./players.seeder.js');
const seedTournaments = require('./tournaments.seeder.js');

const { games, players, tournaments } = require('../assets');

const db = new sqlite3.Database('./src/database/database.sqlite', (err) => {
  if (err) console.log(`Error opening database: ${err.message}`);
  else console.log(`Connected to the SQLite database!`);
});

seedGames(db, games, () => {
  seedPlayers(db, players, () => {
    seedTournaments(db, tournaments, () => {
      //close db connection
      db.close((err) => {
        if (err) console.error(`Error closing database: ${err.message}`);
        else console.log('Database connection closed.');
      });
    });
  });
});
