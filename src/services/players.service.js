const { PlayersRepository } = require('../repositories');
const playersRepository = new PlayersRepository();

class PlayersService {
  async getAllPlayers() {
    const response = await playersRepository.getAll();
    return response;
  }

  async getPlayerById(id) {
    const response = await playersRepository.getById(id);
    return response;
  }

  async getPlayersByPlatform(platform) {
    const response = await playersRepository.getPlayersByPlatform(platform);
    return response;
  }

  async getPlayersSortedByRatingHighToLow() {
    const response =
      await playersRepository.getPlayersSortedByRatingHighToLow();
    return response;
  }
}

module.exports = PlayersService;
