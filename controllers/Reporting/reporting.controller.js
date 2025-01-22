const Report = require('../../models/reporting.model');

// Récupérer une Daader par ID
exports.getReport = (req, res) => {
  const village = req.params.village
  const speculation = req.params.speculation
  const debut = req.params.debut
  const fin = req.params.fin
  
  Report.getReport(village, speculation, debut, fin, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Rapport non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};
