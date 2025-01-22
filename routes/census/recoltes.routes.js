const express = require('express');
const router = express.Router();
const RecolteController = require('../../controllers/recoltes.controller');

// Routes Producteurs
router.get('/', RecolteController.getAllRecoltes);
router.get('/:id', RecolteController.getRecolteById);
router.get('/op/:id', RecolteController.getRecolteByOp);
router.get('/campagne/:id', RecolteController.getRecolteByCampagne);
router.put('/:id', RecolteController.updateRecolte);
router.delete('/:id', RecolteController.deleteRecolte);

module.exports = router;
