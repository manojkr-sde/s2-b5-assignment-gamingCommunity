const seedPlayers = function (db, data, callback) {
  const createTableQuery = `CREATE TABLE IF NOT EXISTS players (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    username TEXT,
    platform TEXT,
    rating REAL
  )`;

  db.serialize(() => {
    db.run(createTableQuery, (err) => {
      if (err) console.error('Error creating table:', err.message);
      else console.log('Players table created or already exists.');
    });

    const insertStatement = db.prepare(
      'INSERT INTO players (name, username, platform, rating) VALUES (?, ?, ?, ?)'
    );

    for (let player of data) {
      insertStatement.run(
        player.name,
        player.username,
        player.platform,
        player.rating
      );
    }

    insertStatement.finalize(() => {
      console.log('Finished seeding players.');
      if (callback) callback();
    });
  });
};

module.exports = seedPlayers;
