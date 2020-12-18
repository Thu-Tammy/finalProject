var express = require('express');
var router = express.Router();
var Resource = require('../models/resource')

/* GET slug listing. */
router.get('/:slug', function(req, res, next) {
  Resource.findOne({  slug: req.params.slug }, (function (err, resources) {
    if (err) console.log(err)

    res.render('show', { resources: resources });
  }))
});

router.get('/', function(req, res, next) {
    Resource.find(function (err, resources) {
        if (err) console.log(err)
    
        res.render('resources', { resources: resources});
    }) 
  });


module.exports = router;