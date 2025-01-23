const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/', userController.getUser);
router.get('/resources/:id', userController.getUserResources);
router.post('/', userController.createUser);

module.exports = router;