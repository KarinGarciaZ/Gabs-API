"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const env = require('dotenv');
env.config();
app.use(bodyParser.json({ limit: '50mb' }));
//app.use( cors({ credentials: true, origin: true, methods: 'GET, POST, PUT, DELETE, OPTIONS', allowedHeaders: 'Content-Type' }) )
app.use(cors({ credentials: true, origin: true }));
//this checks the enviroment of server
const adminRoutes = require('./models/admin.routes');
app.use(adminRoutes);
app.listen(+process.env.PORT, process.env.HOST, () => {
    console.log(`API ready to get requests...`);
    console.log('running on port ', +process.env.PORT);
});
