const express = require('express');
const router = express.Router();
const listsCtrl = require('../controllers/lists');
const isLoggedIn = require('../config/auth');

// All paths in this router have "/lists" prefixed to them

router.get('/', listsCtrl.index);

router.post('/', listsCtrl.create);

router.post('/:id/cocktails', listsCtrl.addToList);

router.delete('/:id/cocktails/:cid', listsCtrl.removeFromList);

module.exports = router;
