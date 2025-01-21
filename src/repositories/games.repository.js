const BaseRepository = require('./base.repository.js');
const { Database } = require('../config');

class GamesRepository extends BaseRepository {
  constructor() {
    super('games');
  }

  async getGamesByGenre(genre) {
    const dbInstance = await Database.connectToDb();
    let query = `SELECT * FROM ${this.tableName} where genre= ?`;
    const response = await dbInstance.all(query, [genre]);
    return response;
  }

  async getGamesByPlatform(platform) {
    const dbInstance = await Database.connectToDb();
    let query = `SELECT * FROM ${this.tableName} where platform= ?`;
    const response = await dbInstance.all(query, [platform]);
    return response;
  }

  async getGamesSortedByRatingHighToLow() {
    const dbInstance = await Database.connectToDb();
    let query = `SELECT * FROM ${this.tableName} ORDER BY rating DESC`;
    const response = await dbInstance.all(query, []);
    return response;
  }
}

module.exports = GamesRepository;
