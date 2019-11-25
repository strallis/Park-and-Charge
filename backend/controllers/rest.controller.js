const express = require('express');

const router = express.Router();
const model = require('../model')

router.get('/', function(req, res) {
  res.json({
    message: 'Welcome to our api! Well done Daniel!'
  });
});

router.post('/signin', function(req, res) {
  console.log('sessionID');
  console.log(req.body.userName);

  res.json({
    sessionID: model.createSession(req.body.userName)
  });
});

//latestsession
router.post('/latestsession', function(req, res) {

  res.json({
    userName: model.getLatestSessionUserName()
  });
  // res.json({
  //   userName: model.fetchUserData()
  // });
});

router.post('/newsession', function(req, res) {

  res.json({
    message: 'Welcome to ParkShark Api'
  });
});



module.exports = router;
