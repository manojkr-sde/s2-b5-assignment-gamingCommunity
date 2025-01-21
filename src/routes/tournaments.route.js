const express = require('express');
const { tournamentsController } = require('../controllers');

const tournamentsRouter = express.Router();

tournamentsRouter.get('/', tournamentsController.getAllTournaments);

tournamentsRouter.get('/details/:id', tournamentsController.getTournamentById);

tournamentsRouter.get(
  '/game/:gameId',
  tournamentsController.getTournamentsByGameId
);

tournamentsRouter.get(
  '/sort-by-prize-pool',
  tournamentsController.getTournamentsSortedByPrizePoolHighToLow
);

module.exports = tournamentsRouter;
