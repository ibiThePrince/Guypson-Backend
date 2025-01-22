const db = require('../../config/db.config');

// Modèle ddader
const Ddader = {
  // Récupérer tous les ddaders
  getAll: (callback) => {
    const query = 'SELECT * FROM ddaders';
    db.query(query, callback);
  },

  // Récupérer un ddader par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM ddaders WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Récupérer un ddader par drader
  getByDrader: (id, callback) => {
    const query = 'SELECT * FROM ddaders WHERE id_DRADER = ?';
    db.query(query, [id], callback);
  },

  // Créer un nouvel ddader
  create: (data, callback) => {
    const query = 'INSERT INTO ddaders SET ?';
    db.query(query, data, callback);
  },

  // Mettre à jour un ddader
  update: (id, data, callback) => {
    const query = 'UPDATE ddaders SET ? WHERE id = ?';
    db.query(query, [data, id], callback);
  },

  // Supprimer un ddader
  delete: (id, callback) => {
    const query = 'DELETE FROM ddaders WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Ddader;
