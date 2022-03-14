var express = require('express');
var app = express();
var db = require('./db');
console.log("app.js")
var requestController = require('./request/requestController');
app.use('/request', requestController);

module.exports = app;