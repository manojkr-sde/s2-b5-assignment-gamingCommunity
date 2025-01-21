const { TournamentsRepository } = require('../repositories');
const tournamentsRepository = new TournamentsRepository();

class TournamentsService {
  async getAllTournaments() {
    const response = await tournamentsRepository.getAll();
    return response;
  }

  async getTournamentById(id) {
    const response = await tournamentsRepository.getById(id);
    return response;
  }

  async getTournamentsByGameId(gameId) {
    const response = await tournamentsRepository.getTournamentsByGameId(gameId);
    return response;
  }

  async getTournamentsSortedByPrizePoolHighToLow() {
    const response =
      await tournamentsRepository.getTournamentsSortedByPrizePoolHighToLow();
    return response;
  }
}

module.exports = TournamentsService;
