const express = require('express');
const router = express.Router();
const listsCtrl = require('../controllers/lists');
const isLoggedIn = require('../config/auth');

// All paths in this router have "/lists" prefixed to them

router.get('/', isLoggedIn, listsCtrl.index);

router.post('/', isLoggedIn, listsCtrl.create);

router.post('/:id/cocktails', isLoggedIn, listsCtrl.addToList);

router.delete('/:id/cocktails/:cid', isLoggedIn, listsCtrl.removeFromList);

router.delete('/:id', isLoggedIn, listsCtrl.removeList);

module.exports = router;