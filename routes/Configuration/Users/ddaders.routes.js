const express = require('express');
const router = express.Router();
const DdaderController = require('../../../controllers/Users/ddaders.controller');

// Routes Producteurs
router.get('/', DdaderController.getAllDdaders);
router.get('/:id', DdaderController.getDdaderById);
router.get('/drader/:id', DdaderController.getDdaderByDrader);
router.post('/', DdaderController.createDdader);
router.put('/:id', DdaderController.updateDdader);
router.delete('/:id', DdaderController.deleteDdader);

module.exports = router;