const express = require('express');

const { pingCheck } = require('../controllers');

const gamesRouter = require('./games.route.js');
const playersRouter = require('./players.route.js');
const tournamentsRouter = require('./tournaments.route.js');

const appRouter = express.Router();

appRouter.get('/', pingCheck('Server is live!'));

appRouter.use('/games', gamesRouter);

appRouter.use('/players', playersRouter);

appRouter.use('/tournaments', tournamentsRouter);

module.exports = appRouter;
