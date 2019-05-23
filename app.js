"use strict";

  const express = require('express');
  const app = express();
  const bodyParser = require('body-parser');
  const cors = require('cors');
  const env = require('dotenv');
  env.config();

  app.use(bodyParser.json({limit: '50mb'}));

  //app.use( cors({ credentials: true, origin: true, methods: 'GET, POST, PUT, DELETE, OPTIONS', allowedHeaders: 'Content-Type' }) )
  app.use( cors({ credentials: true, origin: true}) )

  
  //this checks the enviroment of server
  const adminRoutes = require('./models/admin.routes');
  app.use(adminRoutes);


  app.listen(5000, '127.0.0.1', () => {
    console.log(`API ready to get requests...`);
    console.log('running on port ' , 5000);
  });