const express = require('express');
const router = express.Router();
const cocktailsCtrl = require('../controllers/cocktails');
const isLoggedIn = require('../config/auth');

router.get('/new', isLoggedIn, cocktailsCtrl.new);

router.post('/', isLoggedIn, cocktailsCtrl.create);

router.get('/', cocktailsCtrl.index);

router.get('/:id', cocktailsCtrl.show);

router.delete('/:id', cocktailsCtrl.delete);

router.get('/:id/edit', cocktailsCtrl.edit);

router.put('/:id', cocktailsCtrl.update);

module.exports = router;
