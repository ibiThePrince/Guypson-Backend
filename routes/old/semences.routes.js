const express = require('express');
const router = express.Router();
const SemenceController = require('../../controllers/semences.controller');

// Routes Producteurs
router.get('/', SemenceController.getAllSemences);
router.get('/:id', SemenceController.getSemenceById);
router.get('/spec/:id', SemenceController.getSemenceBySpec);
router.post('/', SemenceController.createSemence);
router.put('/:id', SemenceController.updateSemence);
router.delete('/:id', SemenceController.deleteSemence);

module.exports = router;
