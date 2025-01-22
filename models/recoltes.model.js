const db = require('../config/db.config');

// Modèle Recolte
const Recoltes = {
  // Récupérer tous les recoltes
  getAll: (callback) => {
    const query = 'SELECT * FROM recoltes';
    db.query(query, callback);
  },

  // Récupérer un Recolte par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM recoltes WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Récupérer un Recolte par campagnes
  getByCampagne: (id, callback) => {
    const query = 'SELECT * FROM recoltes WHERE id_campagne = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel Recolte
  create: (data, callback) => {
    const query = 'INSERT INTO recoltes SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un Recolte
  update: (id, data, callback) => {
    const query = 'UPDATE recoltes SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un Recolte
  delete: (id, callback) => {
    const query = 'DELETE FROM recoltes WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Recoltes;
