const BaseRepository = require('./base.repository.js');

const { Database } = require('../config');

class PlayersRepository extends BaseRepository {
  constructor() {
    super('players');
  }

  async getPlayersByPlatform(platform) {
    const dbInstance = await Database.connectToDb();
    let query = `SELECT * FROM ${this.tableName} where platform= ?`;
    const response = await dbInstance.all(query, [platform]);
    return response;
  }

  async getPlayersSortedByRatingHighToLow() {
    const dbInstance = await Database.connectToDb();
    let query = `SELECT * FROM ${this.tableName} ORDER BY rating DESC`;
    const response = await dbInstance.all(query, []);
    return response;
  }
}

module.exports = PlayersRepository;
