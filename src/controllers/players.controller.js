const { StatusCodes } = require('http-status-codes');
const { PlayersService } = require('../services');

const playersService = new PlayersService();

async function getAllPlayers(_, res) {
  try {
    const response = await playersService.getAllPlayers();

    if (response === null || response.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `No Players found in Database!`,
        players: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: 'Fetched Players successfully!',
        players: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Failed to fetch Players!',
      error: error.message,
    });
  }
}

async function getPlayerById(req, res) {
  const id = parseInt(req.params.id);
  try {
    const response = await playersService.getPlayerById(id);

    if (response === null || response === undefined) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `Failed to fetch Player of id:${id}!`,
        player: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: `Fetched Player successfully for id:${id}!`,
        player: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Failed to fetch Player of id:${id}!`,
      error: error.message,
    });
  }
}

async function getPlayersByPlatform(req, res) {
  const platform = req.params.platform;
  try {
    const response = await playersService.getPlayersByPlatform(platform);

    if (response === null || response?.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `Failed to fetch Players of platform:${platform}!`,
        players: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: `Fetched Players successfully for platform:${platform}!`,
        players: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Failed to fetch Players of platform:${platform}!`,
      error: error.message,
    });
  }
}

async function getPlayersSortedByRatingHighToLow(_, res) {
  try {
    const response = await playersService.getPlayersSortedByRatingHighToLow();

    if (response === null || response?.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `Failed to fetch Players sorted by ratings!`,
        players: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: `Fetched Players successfully sorted by ratings!`,
        players: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Failed to fetch Players sorted by ratings!`,
      error: error.message,
    });
  }
}

module.exports = {
  getAllPlayers,
  getPlayerById,
  getPlayersByPlatform,
  getPlayersSortedByRatingHighToLow,
};
