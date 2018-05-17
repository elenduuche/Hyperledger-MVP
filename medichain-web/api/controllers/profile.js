var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.profileRead = function(req, res) {

  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

};
module.exports.getProfile = function(req, res) {
console.log('getProfile endpoint called by: ' + req.params.id)
  if (!req.params.id) {
    res.status(401).json({
      "message" : "UnauthorizedError: no username specified"
    });
  } else {
    User
      .findOne({username: req.params.id})
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

};

module.exports.updateProfilehasWalletStatus = function(req, res) {
  console.log('updateProfilehasWalletStatus endpoint called by: ' + req.params.id)
    if (!req.params.id) {
      res.status(401).json({
        "message" : "UnauthorizedError: no username specified"
      });
    } else {
      User
        .findOneAndUpdate({
          query: { username: req.params.id },
          update: { $inc: { hasWallet: true } }
        })
        .exec(function(err, user) {
          res.status(200).json(user);
        });
    }
  
  };
