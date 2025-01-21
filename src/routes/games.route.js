const express = require('express');
const { gamesController } = require('../controllers');

const gamesRouter = express.Router();

gamesRouter.get('/', gamesController.getAllGames);

gamesRouter.get('/details/:id', gamesController.getGameById);

gamesRouter.get('/genre/:genre', gamesController.getGamesByGenre);

gamesRouter.get('/platform/:platform', gamesController.getGamesByPlatform);

gamesRouter.get(
  '/sort-by-rating',
  gamesController.getGamesSortedByRatingHighToLow
);

module.exports = gamesRouter;
