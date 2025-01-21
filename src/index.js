const express = require('express');
const cors = require('cors');

const { serverConfig, Database } = require('./config');
const appRouter = require('./routes');

const app = express();
app.use(cors());
app.use('/', appRouter);

app.listen(serverConfig.PORT, async () => {
  await Database.connectToDb();
  console.log(`Server started at PORT:${serverConfig.PORT}`);
});
