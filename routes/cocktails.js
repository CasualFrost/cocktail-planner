var express = require('express');
var router = express.Router();
// const cocktailsCtrl = require('../controllers/cocktails');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
