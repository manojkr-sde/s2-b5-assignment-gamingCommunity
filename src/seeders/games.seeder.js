const seedGames = function (db, data, callback) {
  const createTableQuery = `CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    genre TEXT,
    platform TEXT,
    rating REAL
  )`;

  db.serialize(() => {
    db.run(createTableQuery, (err) => {
      if (err) console.error('Error creating table:', err.message);
      else console.log('Games table created or already exists.');
    });

    const insertStatement = db.prepare(
      'INSERT INTO games (title, genre, platform, rating) VALUES (?, ?, ?, ?)'
    );

    for (let game of data) {
      insertStatement.run(game.title, game.genre, game.platform, game.rating);
    }

    insertStatement.finalize(() => {
      console.log('Finished seeding games.');
      if (callback) callback();
    });
  });
};

module.exports = seedGames;
