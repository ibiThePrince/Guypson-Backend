const express = require('express');
const router = express.Router();
const opController = require('../../controllers/Census/op.controller');

// Routes Producteurs
router.get('/', opController.getAllOps);
router.get('/:id', opController.getOpById);
router.post('/', opController.createOp);
router.put('/:id', opController.updateOp);
router.delete('/:id', opController.deleteOp);

module.exports = router;
