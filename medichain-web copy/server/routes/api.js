const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var passport = require('passport');
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'test-secret',
  userProperty: 'payload'
});

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://127.0.0.1:27017/medichain', (err, client) => {
        console.log("establised connection to mongodb:" + client);

        if (err) return console.log(err);
        let db = client.db('medichain')
    
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    console.log("getting route users..");
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Authenticate user
router.post('/authenticateuser', (req, res) => {
    console.log("getting route for authenticate user..");
    connection((db) => {
        var query = { user: req.body.user, password: req.body.password}
        db.collection('user')
            .find(query)
            .toArray()
            .then((users) => {
                if(users != [])
                {
                    response.data = users;
                    res.json(response);
                }
                else{
                  response.status = 404;
                  response.message = "Username or Password is incorrect"
                }
               
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
// register user
router.post('/createuser', (req, res) => {
    console.log("getting route create user..");
    connection((db) => {
        if(req.body != null)
        {
            var userObj = 
            {
                user: req.body.user,
                password: req.body.password,
                access_code: req.body.access_code
            }
         db.collection('user')
          .insertOne(userObj)
          .then((user) => {
            console.log("getting response..");
           response.data = user;
           res.json(response);
       })
       .catch((err) => {
           sendError(err, res);
       });
    }
    else
    { 
         response.status = 501;
         response.message = "Request data can not be empty"
    }
       

 });
});


module.exports = router;