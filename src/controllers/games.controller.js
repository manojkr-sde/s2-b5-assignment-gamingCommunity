const { StatusCodes } = require('http-status-codes');
const { GamesService } = require('../services');

const gamesService = new GamesService();

async function getAllGames(_, res) {
  try {
    const response = await gamesService.getAllGames();

    if (response === null || response.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `No Games found in Database!`,
        games: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: 'Fetched games successfully!',
        games: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: 'Failed to fetch Games!',
      error: error.message,
    });
  }
}

async function getGameById(req, res) {
  const id = parseInt(req.params.id);
  try {
    const response = await gamesService.getGameById(id);

    if (response === null || response === undefined) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `Failed to fetch game of id:${id}!`,
        game: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: `Fetched game successfully for id:${id}!`,
        game: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Failed to fetch game of id:${id}!`,
      error: error.message,
    });
  }
}

async function getGamesByGenre(req, res) {
  const genre = req.params.genre;
  try {
    const response = await gamesService.getGamesByGenre(genre);

    if (response === null || response?.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `Failed to fetch games of genre:${genre}!`,
        games: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: `Fetched games successfully for genre:${genre}!`,
        games: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Failed to fetch games of genre:${genre}!`,
      error: error.message,
    });
  }
}

async function getGamesByPlatform(req, res) {
  const platform = req.params.platform;
  try {
    const response = await gamesService.getGamesByPlatform(platform);

    if (response === null || response?.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `Failed to fetch games of platform:${platform}!`,
        games: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: `Fetched games successfully for platform:${platform}!`,
        games: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Failed to fetch games of platform:${platform}!`,
      error: error.message,
    });
  }
}

async function getGamesSortedByRatingHighToLow(_, res) {
  try {
    const response = await gamesService.getGamesSortedByRatingHighToLow();

    if (response === null || response?.length === 0) {
      res.status(StatusCodes.NOT_FOUND).json({
        message: `Failed to fetch games sorted by ratings!`,
        games: response,
      });
    } else {
      res.status(StatusCodes.OK).json({
        message: `Fetched games successfully sorted by ratings!`,
        games: response,
      });
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: `Failed to fetch games sorted by ratings!`,
      error: error.message,
    });
  }
}

module.exports = {
  getAllGames,
  getGameById,
  getGamesByGenre,
  getGamesByPlatform,
  getGamesSortedByRatingHighToLow,
};
