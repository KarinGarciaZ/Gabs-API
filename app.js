"use strict";
  const express = require('express')
  const app = express();

  const bodyParser = require('body-parser');
  const cors = require('cors');
  const env = require('dotenv');
  const session = require('express-session');
  env.config();

  //this sets the db config to save sessions
  let sessionStore = require('./src/db-config/mysql-session');
  
    app.use(session({
      secret: 'session_cookie_secret',
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    }));

  app.use(bodyParser.json());

  //app.use( cors({ credentials: true, origin: true, methods: 'GET, POST, PUT, DELETE, OPTIONS', allowedHeaders: 'Content-Type' }) )
  app.use( cors({ credentials: true, origin: true}) )

  
  //this checks the enviroment of server
  const adminRoutes = require('./src/models/admin.routes');
  app.use(adminRoutes);
 
  app.listen( process.env.PORT, process.env.HOST, () => {
    console.log(`API ready to get requests...`);
    console.log('running on port ' , +process.env.PORT);
  });