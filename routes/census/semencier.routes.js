const express = require('express');
const router = express.Router();
const SemencierController = require('../../controllers/Census/semencier.controller');

// Routes Producteurs
router.get('/', SemencierController.getAllSemenciers);
router.get('/:id', SemencierController.getSemencierById);
router.post('/', SemencierController.createSemencier);
router.put('/:id', SemencierController.updateSemencier);
router.delete('/:id', SemencierController.deleteSemencier);

module.exports = router;
