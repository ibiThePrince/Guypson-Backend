const db = require('../config/db.config');

// Récupérer les informations liées aux tables de données
const Report = {
getReport: (speculation, DD, DA, village, callback) => {
    const query = 'SELECT p.id, p.nom, p.prenom, p.adresse, p.tel, p.mail FROM producteurs p INNER JOIN campagnes c ON p.id = c.id_Producteur INNER JOIN villages v ON c.id_village = v.id INNER JOIN speculations s ON c.id_Speculation = s.id INNER JOIN récoltes r ON c.id = r.id_campagne WHERE s.nom = ? AND r.Date_prevue <= ? AND r.DA >= ? AND v.nom = ?';
    db.query(query, [speculation,DD,DA,village], callback);
  }
}


module.exports = Report;
