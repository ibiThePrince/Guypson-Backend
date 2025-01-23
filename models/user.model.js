const db = require('../config/db.config');

//Outils de fragmentation
const fragmentation = (data)=>{
  const columns = Object.keys(data).join(', ');
  const placeholders = Object.keys(data).map(() => '?').join(', ');
  const values = Object.values(data);
  return {columns, placeholders, values};
}
// Modèle Utilisateur

const User = {
  // Récupérer tous les users
  getAll: (callback) => {
    const query = 'SELECT * FROM users';
    db.query(query, callback);
  },

  // Récupérer un Utilisateur par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], callback);
  },

  // Fonction pour récupérer un utilisateur par email
  getByEmail: (email, callback) => {
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      if (results.length === 0) {
        return callback(null, null); // Aucun utilisateur trouvé
      }
      return callback(null, results[0]); // Retourne le premier utilisateur trouvé
    });
  },

  // Créer un nouvel Utilisateur
  create: (email, callback) => {
    //const fragment = fragmentation(data)
    console.log(email)
    const query = 'INSERT INTO users (email) VALUES (?)';
    console.log(query)
    db.query(query, email, callback);
  },

  // Mettre à jour un Utilisateur
  update: (id, data, callback) => {
    // Construire dynamiquement les colonnes et valeurs
    const fields = Object.keys(data)
    .map((key) => `${key} = ?`)
    .join(', ');
    const values = Object.values(data);
    const query = `UPDATE users SET ${fields} WHERE id = ?`;

    db.query(query, [values, id], callback);
  },

  // Supprimer un Utilisateur
  delete: (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], callback);
  },
};


// Modele Account

const Account = {
    // Récupérer tous les comptes
    getAll: (callback) => {
        const query = 'SELECT * FROM accounts';
        db.query(query, callback);
    },

    // Creer un nouveau compte
    create: (data, callback) => {
      const fragment = fragmentation(data)
      const query = `INSERT INTO accounts (${fragment.columns}) VALUES (${fragment.placeholders})`;
      console.log(query)
      db.query(query, fragment.values, callback);
    },
    // Récupérer un Compte par ID
    getById: (id) => {
        return Promise((resolve, reject) => {
            const query = 'SELECT * FROM accounts WHERE id = ?';
            db.query(query, [id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        })
    },

    // Récupérer un Compte par ID user
    getByUser: (id, callback) => {
    const query = 'SELECT * FROM users WHERE id_user = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      if (results.length === 0) {
        return callback(null, null); // Aucun compte trouvé
      }
      return callback(null, results[0]); // Retourne le premier compte trouvé
    });
  },

    // Modifier le role d'un compte
    UpdateRole: (id,data) => {
        return new Promise((resolve, reject) => {
          // Construire dynamiquement les colonnes et valeurs
            const fields = Object.keys(data)
            .map((key) => `${key} = ?`)
            .join(', ');
            const values = Object.values(data);
            const query = `UPDATE accounts SET ${fields} WHERE id = ?`;
            db.query(query, [values, id], (err, result) => {
                if (err) reject(err);
                resolve(result);
            });
        })
    },

    
}

module.exports = {
  User,
  Account,
  fragmentation
};
