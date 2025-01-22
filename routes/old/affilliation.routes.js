const express = require('express');
const router = express.Router();
const AffiliationController = require('../../controllers/affilliations.controller');

// Routes Producteurs
router.get('/', AffiliationController.getAllAffiliations);
router.get('/:id', AffiliationController.getAffiliationById);
router.get('/op/:id', AffiliationController.getAffiliationByOp);
router.get('/prod/:id', AffiliationController.getAffiliationByProd);
router.post('/', AffiliationController.createAffiliation);
router.put('/:id', AffiliationController.updateAffiliation);
router.delete('/:id', AffiliationController.deleteAffiliation);

module.exports = router;
