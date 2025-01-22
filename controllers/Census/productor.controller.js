const Productor = require('../../models/productor.model');
const Campagne = require('../../models/campagnes.model');


/************************   CRUD DES PRODUCTEURS  ***************************************/
// Récupérer tous les Producteurs
exports.getAllProductors = (req, res) => {
  Productor.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Producteurs' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer un Producteur par ID
exports.getProductorById = (req, res) => {
  const id = req.params.id;
  Productor.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Producteur non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer les op du producteur
exports.getOpByProductor = (req, res) => {
  const id = req.params.id;
  Productor.getOp(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Op non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Créer un nouvel Producteur
exports.createProductor = (req, res) => {
  const data = req.body;
  Productor.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de l’Producteur' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Producteur
exports.updateProductor = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Productor.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de l’Producteur' });
      return;
    }
    res.status(200).json({ message: 'Producteur mis à jour avec succès' });
  });
};

// Supprimer un Producteur
exports.deleteProductor = (req, res) => {
  const id = req.params.id;
  Productor.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Producteur non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Producteur supprimé avec succès' });
  });
};


/************************   CRUD DES CAMPAGNES  ***************************************/
// Récupérer toutes les Campagnes
exports.getAllCampagnes = (req, res) => {
  Campagne.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Campagnes' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer une Campagne par ID
exports.getCampagneById = (req, res) => {
  const id = req.params.id;
  Campagne.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer une Campagne par OP
exports.getCampagneByOp = (req, res) => {
  const id = req.params.id;
  Campagne.getByOp(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer une Campagne par Producteur
exports.getCampagneByProd = (req, res) => {
  const id = req.params.id;
  Campagne.getByProducteur(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer une Campagne par Speculation
exports.getCampagneBySpec = (req, res) => {
  const id = req.params.id;
  Campagne.getBySpeculation(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Récupérer une Campagne par Village
exports.getCampagneByVillage = (req, res) => {
  const id = req.params.id;
  Campagne.getByVillage(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};


// Créer une nouvelle Campagne
exports.createCampagne = (req, res) => {
  const data = req.body;
  Campagne.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de la Campagne' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Campagne
exports.updateCampagne = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Campagne.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de l’Campagne' });
      return;
    }
    res.status(200).json({ message: 'Campagne mis à jour avec succès' });
  });
};

// Supprimer une Campagne
exports.deleteCampagne = (req, res) => {
  const id = req.params.id;
  Campagne.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Campagne supprimé avec succès' });
  });
};
