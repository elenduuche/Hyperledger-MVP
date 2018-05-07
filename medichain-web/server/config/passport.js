var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongodb').MongoClient;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://127.0.0.1:27017/medichain', (err, client) => {
        console.log("establised connection to mongodb:" + client);

        if (err) return console.log(err);
        let db = client.db('medichain')
        closure(db);
    });
};


passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    connection((db) => {
        var User = db.model('user');
        User.findOne({ email: username }, function (err, user) {
            if (err) { return done(err); }
            // Return if user not found in database
            if (!user) {
              return done(null, false, {
                message: 'User not found'
              });
            }
            // Return if password is wrong
            if (!user.validPassword(password)) {
              return done(null, false, {
                message: 'Password is wrong'
              });
            }
            // If credentials are correct, return the user object
            return done(null, user);
          });
     
    });

    
  }
));