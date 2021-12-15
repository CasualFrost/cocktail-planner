const express = require('express');
const router = express.Router();
const cocktailsCtrl = require('../controllers/cocktails');

// All paths in this router have "/cocktails" prefixed to them

// GET "/movies/new" - New Route
router.get('/new', cocktailsCtrl.new);

// POST "/cocktails" - Create Route
router.post('/', cocktailsCtrl.create);

// GET "/cocktails" - Index Route
router.get('/', cocktailsCtrl.index);

// GET "/cocktails/:id" - Show Route
router.get('/:id', cocktailsCtrl.show);

module.exports = router;
