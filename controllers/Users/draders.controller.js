const Drader = require('../../models/userModel/drader.model');

// Récupérer toutes les Draders
exports.getAllDraders = (req, res) => {
  Drader.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Draders' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer une Drader par ID
exports.getDraderById = (req, res) => {
  const id = req.params.id;
  Drader.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Drader non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};

// Créer une nouvelle Drader
exports.createDrader = (req, res) => {
  const data = req.body;
  Drader.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de la Drader' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Drader
exports.updateDrader = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Drader.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de le Drader' });
      return;
    }
    res.status(200).json({ message: 'Drader mis à jour avec succès' });
  });
};

// Supprimer une Drader
exports.deleteDrader = (req, res) => {
  const id = req.params.id;
  Drader.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Drader non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Drader supprimé avec succès' });
  });
};
