const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
// var cors = require('cors');
// [SH] Require Passport
var passport = require('passport');

// [SH] Bring in the data model
// require('./server/models/db');
// require('./server/models/users');
// // [SH] Bring in the Passport config after model is defined
// require('./server/config/passport');


// API file for interacting with MongoDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
//app.use(cors());

// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));