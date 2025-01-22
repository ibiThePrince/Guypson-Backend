const db = require('../../config/db.config');

// Modèle village
const Village = {
  // Récupérer tous les villages
  getAll: (callback) => {
    const query = 'SELECT * FROM villages';
    db.query(query, callback);
  },

  // Récupérer un village par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM villages WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Récupérer un village par pas
  getByPas: (id, callback) => {
    const query = 'SELECT * FROM villages WHERE id_PA = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel village
  create: (data, callback) => {
    const query = 'INSERT INTO villages SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un village
  update: (id, data, callback) => {
    const query = 'UPDATE villages SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un village
  delete: (id, callback) => {
    const query = 'DELETE FROM villages WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Village;
