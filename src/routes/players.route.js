const express = require('express');
const { playersController } = require('../controllers');

const playersRouter = express.Router();

playersRouter.get('/', playersController.getAllPlayers);

playersRouter.get('/details/:id', playersController.getPlayerById);

playersRouter.get(
  '/platform/:platform',
  playersController.getPlayersByPlatform
);

playersRouter.get(
  '/sort-by-rating',
  playersController.getPlayersSortedByRatingHighToLow
);

module.exports = playersRouter;
