const db = require('../../config/db.config');

// Modèle Pas
const Pas = {
  // Récupérer tous les pas
  getAll: (callback) => {
    const query = 'SELECT * FROM pas';
    db.query(query, callback);
  },

  // Récupérer un Pas par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM pas WHERE id = ?';
    db.query(query, [id], callback);
  },
  // Récupérer un Pas par Daader
  getByDaader: (id, callback) => {
    const query = 'SELECT * FROM pas WHERE id_DAADER = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel Pas
  create: (data, callback) => {
    const query = 'INSERT INTO pas SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un Pas
  update: (id, data, callback) => {
    const query = 'UPDATE pas SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un Pas
  delete: (id, callback) => {
    const query = 'DELETE FROM pas WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Pas;
