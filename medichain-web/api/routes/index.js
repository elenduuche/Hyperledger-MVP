var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile
router.get('/confirm/:id', ctrlProfile.getProfile);
router.get('/profile', auth, ctrlProfile.profileRead);
router.get('/updatewalletstatus/:id', ctrlProfile.updateProfilehasWalletStatus);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
