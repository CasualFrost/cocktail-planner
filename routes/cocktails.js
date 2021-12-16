const express = require('express');
const router = express.Router();
const cocktailsCtrl = require('../controllers/cocktails');
const isLoggedIn = require('../config/auth');


// All paths in this router have "/cocktails" prefixed to them

// GET "/movies/new" - New Route
router.get('/new', isLoggedIn, cocktailsCtrl.new);

// POST "/cocktails" - Create Route
router.post('/', isLoggedIn, cocktailsCtrl.create);

// GET "/cocktails" - Index Route
router.get('/', cocktailsCtrl.index);

// GET "/cocktails/:id" - Show Route
router.get('/:id', cocktailsCtrl.show);

module.exports = router;
