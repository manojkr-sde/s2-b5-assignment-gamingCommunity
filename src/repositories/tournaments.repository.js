const BaseRepository = require('./base.repository.js');

const { Database } = require('../config');

class TournamentsRepository extends BaseRepository {
  constructor() {
    super('tournaments');
  }

  async getTournamentsByGameId(gameId) {
    const dbInstance = await Database.connectToDb();
    let query = `SELECT * FROM ${this.tableName} where gameId= ?`;
    const response = await dbInstance.all(query, [gameId]);
    return response;
  }

  async getTournamentsSortedByPrizePoolHighToLow() {
    const dbInstance = await Database.connectToDb();
    let query = `SELECT * FROM ${this.tableName} ORDER BY prizePool DESC`;
    const response = await dbInstance.all(query, []);
    return response;
  }
}

module.exports = TournamentsRepository;
