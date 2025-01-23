const Ddader = require('../../models/userModel/ddader.model');

// Récupérer toutes les Ddaders
exports.getAllDdaders = (req, res) => {
  Ddader.getAll((err, results) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la récupération des Ddaders' });
      return;
    }
    res.status(200).json(results);
  });
};

// Récupérer une Ddader par ID
exports.getDdaderById = (req, res) => {
  const id = req.params.id;
  Ddader.getById(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Ddader non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
  });
};


// Récupérer une Ddader par Drader
exports.getDdaderByDrader = (req, res) => {
  const id = req.params.id;
  Ddader.getByDrader(id, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Ddader non trouvé' });
      return;
    }
    res.status(200).json(result);
  });
};

// Créer une nouvelle Ddader
exports.createDdader = (req, res) => {
  const data = req.body;
  Ddader.create(data, (err, result) => {
    if (err) {
      res.status(500).send({ message: 'Erreur lors de la création de la Ddader' });
      return;
    }
    res.status(201).json({ id: result.insertId, ...data });
  });
};

// Mettre à jour un Ddader
exports.updateDdader = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Ddader.update(id, data, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Échec de la mise à jour de le Ddader' });
      return;
    }
    res.status(200).json({ message: 'Ddader mis à jour avec succès' });
  });
};

// Supprimer une Ddader
exports.deleteDdader = (req, res) => {
  const id = req.params.id;
  Ddader.delete(id, (err, result) => {
    if (err || result.affectedRows === 0) {
      res.status(404).send({ message: 'Ddader non trouvé' });
      return;
    }
    res.status(200).json({ message: 'Ddader supprimé avec succès' });
  });
};
