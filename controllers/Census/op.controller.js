const Op = require('../../models/op.model');
const Productor = require('../../models/productor.model')

// Récupérer tous les Ops
exports.getAllOps = (req, res) => {
  Op.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Ops' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer un Op par ID
exports.getOpById = (req, res) => {
  const id = req.params.id;
  Op.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Op non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Créer un nouvel Op
exports.createOp = (req, res) => {
  const data = req.body;
  Op.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de l’Op' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Op
exports.updateOp = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Op.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de l’Op' });
      return;
    }
    res.status(200).json({ message: 'Op mis à jour avec succès' });
  });
};


// Supprimer un Op
exports.deleteOp = (req, res) => {
  const id = req.params.id;
  Op.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Op non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Op supprimé avec succès' });
  });
};
