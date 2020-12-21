const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
var User = require('../models/newUser');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('users'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>res.render('dashboard'));

module.exports = router;

