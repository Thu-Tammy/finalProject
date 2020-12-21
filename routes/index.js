var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/myviews', function(req, res, next) {
  res.render('myviews');
});

router.get('/letusfind', function(req, res, next) {
  res.render('letusfind');
});

router.get('/beforerepair', function(req, res, next) {
  res.render('beforerepair');
});

router.get('/repairinprogress', function(req, res, next) {
  res.render('repairinprogress');
});

router.get('/afterrepair', function(req, res, next) {
  res.render('afterrepair');
});

module.exports = router;