const db = require('../config/db.config');

// Modèle OP
const ops = {
  // Récupérer tous les ops
  getAll: (callback) => {
    const query = 'SELECT * FROM ops';
    db.query(query, callback);
  },

  // Récupérer un OPs par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM ops WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel OP
  create: (data, callback) => {
    const query = 'INSERT INTO ops SET ?';
    db.query(query, data, callback);
  },

  

  // Mettre à jour un OP
  update: (id, data, callback) => {
    const query = 'UPDATE ops SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un OPs
  delete: (id, callback) => {
    const query = 'DELETE FROM ops WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = ops;
