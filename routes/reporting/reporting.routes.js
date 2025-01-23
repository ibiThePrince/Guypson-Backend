const express = require('express');
const router = express.Router();
const ReportController = require('../../controllers/Reporting/reporting.controller');
const { isDdader } = require('../../middleware/auth.middleware');

// Routes Producteurs
router.get('/ddader',isDdader, ReportController.getDdaderByDrader);
router.get('/daader', ReportController.getDaaderByDdader)
router.get('/pas', ReportController.getPasByDaader)
router.get('/village', ReportController.getVillageByPas)
router.get('/campages/:id_speculation', ReportController.getCampagneBySpecAndVillage)

module.exports = router;
