const { StatusCodes } = require('http-status-codes');
const { TournamentsService } = require('../services');

const tournamentsService = new TournamentsService();

async function getAllTournaments(_, res) {
  try {
    const response = await tournamentsService.getAllTournaments();

    if (response === null || response.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `No Tournaments found in Database!`,
        tournaments: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: 'Fetched Tournaments successfully!',
        tournaments: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Failed to fetch Tournaments!',
      error: error.message,
    });
  }
}

async function getTournamentById(req, res) {
  const id = parseInt(req.params.id);
  try {
    const response = await tournamentsService.getTournamentById(id);

    if (response === null || response === undefined) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `Failed to fetch game of id:${id}!`,
        tournament: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: `Fetched tournament successfully for id:${id}!`,
        tournament: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Failed to fetch tournament of id:${id}!`,
      error: error.message,
    });
  }
}

async function getTournamentsByGameId(req, res) {
  const gameId = parseInt(req.params.gameId);
  try {
    const response = await tournamentsService.getTournamentsByGameId(gameId);

    if (response === null || response?.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `Failed to fetch tournaments of gameId:${gameId}!`,
        tournaments: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: `Fetched tournaments successfully for gameId:${gameId}!`,
        tournaments: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Failed to fetch tournaments of gameId:${gameId}!`,
      error: error.message,
    });
  }
}

async function getTournamentsSortedByPrizePoolHighToLow(_, res) {
  try {
    const response =
      await tournamentsService.getTournamentsSortedByPrizePoolHighToLow();

    if (response === null || response?.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `Failed to fetch tournaments sorted by price pool!`,
        tournaments: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: `Fetched tournaments successfully sorted by prize pool!`,
        tournaments: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Failed to fetch tournaments sorted by prize pool!`,
      error: error.message,
    });
  }
}

module.exports = {
  getAllTournaments,
  getTournamentById,
  getTournamentsByGameId,
  getTournamentsSortedByPrizePoolHighToLow,
};
