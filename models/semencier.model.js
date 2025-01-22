const db = require('../config/db.config');

// Modèle Semenciers
const Semenciers = {
  // Récupérer tous les semenciers
  getAll: (callback) => {
    const query = 'SELECT * FROM semenciers';
    db.query(query, callback);
  },

  // Récupérer un Semencier par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM semenciers WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel Semencier
  create: (data, callback) => {
    const query = 'INSERT INTO semenciers SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un Semencier
  update: (id, data, callback) => {
    const query = 'UPDATE semenciers SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un Semencier
  delete: (id, callback) => {
    const query = 'DELETE FROM semenciers WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Semenciers;
