const express = require('express');
const router = express.Router();
const ProductorController = require('../../controllers/Census/productor.controller');

// Routes Producteurs
router.get('/', ProductorController.getAllProductors);
router.get('/:id', ProductorController.getProductorById);
router.get('/op/:id', ProductorController.getOpByProductor);
router.post('/', ProductorController.createProductor);
router.put('/:id', ProductorController.updateProductor);
router.delete('/:id', ProductorController.deleteProductor);

module.exports = router;
