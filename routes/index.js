var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/myviews', function(req, res, next) {
  res.render('myviews');
});

module.exports = router;