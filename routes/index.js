var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home');
 
});

router.get('/movie/create', function(req, res, next) {
  res.render('movie/create');
});

router.get('/signup', function(req, res, next) {
  res.render('user/signup');
});

router.get('/login', function(req, res, next) {
  res.render('user/login');
});
 

module.exports = router;
