const express = require('express');
const router = express.Router();
const CampagneController = require('../../controllers/campagnes.controller');

// Routes Producteurs
router.get('/', CampagneController.getAllCampagnes);
router.get('/:id', CampagneController.getCampagneById);
router.get('/op/:id', CampagneController.getCampagneByOp);
router.get('/prod/:id', CampagneController.getCampagneByProd);
router.get('/village/:id', CampagneController.getCampagneByVillage);
router.get('/spec/:id', CampagneController.getCampagneBySpec);
router.post('/', CampagneController.createCampagne);
router.put('/:id', CampagneController.updateCampagne);
router.delete('/:id', CampagneController.deleteCampagne);

module.exports = router;
