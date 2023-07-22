require("dotenv").config();
const apm = require('elastic-apm-node').start()

import express from 'express';
import router from './routes';

function startServer(){  
  const app = express();
  const port = process.env.PORT;

  app.use(express.json())

  app.use('/', router);

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

startServer()
