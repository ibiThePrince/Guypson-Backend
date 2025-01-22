const db = require('../../config/db.config');

// Modèle daader
const Daader = {
  // Récupérer tous les daaders
  getAll: (callback) => {
    const query = 'SELECT * FROM daaders';
    db.query(query, callback);
  },

  // Récupérer un daader par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM daaders WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Récupérer un daader par ddader
  getByDdader: (id, callback) => {
    const query = 'SELECT * FROM daaders WHERE id_DDADER = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel daader
  create: (data, callback) => {
    const query = 'INSERT INTO daaders SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un daader
  update: (id, data, callback) => {
    const query = 'UPDATE daaders SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un daader
  delete: (id, callback) => {
    const query = 'DELETE FROM daaders WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Daader;
