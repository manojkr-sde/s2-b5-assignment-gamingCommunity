const { GamesRepository } = require('../repositories');
const gamesRepository = new GamesRepository();

class GamesService {
  async getAllGames() {
    const response = await gamesRepository.getAll();
    return response;
  }
  async getGameById(id) {
    const response = await gamesRepository.getById(id);
    return response;
  }

  async getGamesByGenre(genre) {
    const response = await gamesRepository.getGamesByGenre(genre);
    return response;
  }

  async getGamesByPlatform(platform) {
    const response = await gamesRepository.getGamesByPlatform(platform);
    return response;
  }

  async getGamesSortedByRatingHighToLow() {
    const response = await gamesRepository.getGamesSortedByRatingHighToLow();
    return response;
  }
}

module.exports = GamesService;
