const express = require('express');
const router = express.Router();
const villageController = require('../../../controllers/Users/village.controller');

// Routes Producteurs
router.get('/', villageController.getAllVillages);
router.get('/:id', villageController.getVillageById);
router.get('/pas/:id', villageController.getVillageByPas);
router.post('/', villageController.createVillage);
router.put('/:id', villageController.updateVillage);
router.delete('/:id', villageController.deleteVillage);

module.exports = router;