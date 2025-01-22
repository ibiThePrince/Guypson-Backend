const db = require('../config/db.config');

// Modèle Semences

const Semences = {
  // Récupérer toutes les semences
  getAll: (callback) => {
    const query = 'SELECT * FROM semences';
    db.query(query, callback);
  },

  // Récupérer une Semences par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM semences WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Récupérer une Semences par speculations
  getBySpeculation: (id, callback) => {
    const query = 'SELECT * FROM semences WHERE id_speculation = ?';
    db.query(query, [id], callback);
  },

  // Créer une nouvel Semences
  create: (data, callback) => {
    const query = 'INSERT INTO semences SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour une Semences
  update: (id, data, callback) => {
    const query = 'UPDATE semences SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer une Semences
  delete: (id, callback) => {
    const query = 'DELETE FROM semences WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Semences;
