const express = require('express');
const router = express.Router();
const ReportController = require('../../controllers/Reporting/reporting.controller');

// Routes Producteurs
router.get('/:speculation/:debut/:fin/:village', ReportController.getReport);


module.exports = router;
