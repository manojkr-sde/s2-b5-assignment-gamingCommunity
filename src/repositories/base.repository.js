const { Database } = require('../config');

class BaseRepository {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async getAll() {
    const dbInstance = await Database.connectToDb();
    let query = `SELECT * FROM ${this.tableName}`;
    const response = await dbInstance.all(query, []);
    return response;
  }

  async getById(id) {
    const dbInstance = await Database.connectToDb();
    let query = `SELECT * FROM ${this.tableName} where id=?`;
    const response = await dbInstance.get(query, [id]);
    return response;
  }
}

module.exports = BaseRepository;
