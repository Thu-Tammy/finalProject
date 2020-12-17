var express = require('express');
var router = express.Router();
var Item = require('../models/items');

/* GET home page. */
router.get('/', function(req, res, next) {
  Item.find(function (err, items) {
    if (err) console.log(err)

    res.render('index', { title: 'Under Body Skin', items: items });
  })
});

router.get('/myviews', function(req, res, next) {
  res.render('myviews');
});

router.post('/', function(req, res, next) {
  console.log(req.body.item);
  res.redirect('/');
});

module.exports = router;