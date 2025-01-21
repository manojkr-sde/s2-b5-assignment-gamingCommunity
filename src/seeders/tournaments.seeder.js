const seedTournaments = function (db, data, callback) {
  const createTableQuery = `CREATE TABLE IF NOT EXISTS tournaments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    gameId INTEGER,
    name TEXT,
    date TEXT,
    prizePool INTEGER
  )`;

  db.serialize(() => {
    db.run(createTableQuery, (err) => {
      if (err) console.error('Error creating table:', err.message);
      else console.log('Tournaments table created or already exists.');
    });

    const insertStatement = db.prepare(
      'INSERT INTO tournaments (gameId, name, date, prizePool) VALUES (?, ?, ?, ?)'
    );

    for (let tournament of data) {
      insertStatement.run(
        tournament.gameId,
        tournament.name,
        tournament.date,
        tournament.prizePool
      );
    }

    insertStatement.finalize(() => {
      console.log('Finished seeding restaurants.');
      if (callback) callback();
    });
  });
};

module.exports = seedTournaments;
