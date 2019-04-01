// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
//app.use(express.static(path.join(__dirname, 'dist/my-project')));
app.use(express.static(path.join(__dirname, 'dist/my-project')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));

var connectionString = 'mongodb://127.0.0.1:27017/webdev';
//var connectionString = 'mongodb://webappmaker:webappmaker@ds163181.mlab.com:63181/webappmaker';
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const client = mongoose.connect( connectionString, { useNewUrlParser: true });



// app.get("/api/hello", function(req, res){
//   console.log("Get hello api call!");
//   res.send("Hello world!");});
// app.get("/api/test", test);
//
// function test(req, res) {
//   console.log("Hit test api....")
//   res.status(400).send('Bad request...');
// }
// require('./helloworld')(app);
require('./assignment/app')(app);
