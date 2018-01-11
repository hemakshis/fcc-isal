const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('./config/database');

require('dotenv').config();

mongoose.Promise = require('bluebird');
mongoose.connect(config.database, {
  useMongoClient: true
});
let db = mongoose.connection;

db.once('open', function(){
  console.log('Connected to MongoDB');
});

db.on('error', function(err){
  console.log(err);
});

// Port Number
var PORT = 3000;

// Init App
var app = express();

// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
  res.render('index');
});

// Route Files
let api = require('./routes/api');
app.use('/api', api);

// Server Listening
app.listen(PORT, function(){
  console.log('Server started on ' + PORT);
});
