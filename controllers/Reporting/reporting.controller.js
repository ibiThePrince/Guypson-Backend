const Campagne = require('../../models/campagnes.model');
const Daader = require('../../models/userModel/daader.model');
const Ddader = require('../../models/userModel/ddader.model');
const Pas = require('../../models/userModel/pas.model');
const Village = require('../../models/userModel/village.model');

/*******************************************************************************************/
/*******************************************************************************************/
/*******************************************************************************************/

// Récupérer une Ddader par Drader
exports.getDdaderByDrader = (req, res) => {
  try{
    const id_drader = req.session.id_drader;
    if(!id_drader){
      res.status(404).send({message: 'Vous n\'avez pas les permissions requises!'})
    }
    Ddader.getByDrader(id_drader, (err, result) => {
      if (err || result.length === 0) {
        res.status(404).send({ message: 'Ddader non trouvé' });
        return;
      }
      res.status(200).json(result[0]);
    });
  } catch(err){
    res.status(500).send({ error: err });
  }
};

// Récupérer une Daader par Ddader
exports.getDaaderByDdader = (req, res) => {
  try{
    const id_ddader = req.session.id_ddader || req.params.id;
    if(!id_ddader){
      res.status(404).send({message: 'Vous n\'avez pas les permissions requises!'})
    }
    Daader.getByDdader(id_ddader, (err, result) => {
      if (err || result.length === 0) {
        res.status(404).send({ message: 'Daader non trouvé' });
        return;
      }
      res.status(200).json(result[0]);
    });
  } catch(err){
    res.status(500).send({ error: err });
  }
};

// Récupérer une pas par Daader
exports.getPasByDaader = (req, res) => {
  try{
    const id_daader = req.session.id_daader || req.params.id;
    if(!id_daader){
      res.status(404).send({message: 'Vous n\'avez pas les permissions requises!'})
    }
    Pas.getByDaader(id_daader, (err, result) => {
      if (err || result.length === 0) {
        res.status(404).send({ message: 'Pas non trouvé' });
        return;
      }
      res.status(200).json(result[0]);
    });
  } catch(err){
    res.status(500).send({ error: err });
  }
};

// Récupérer une village par pas
exports.getVillageByPas = (req, res) => {
  try{
    const id_pas = req.session.id_pas || req.params.id;
    if(!id_pas){
      res.status(404).send({message: 'Vous n\'avez pas les permissions requises!'})
    }
    Village.getByPas(id_pas, (err, result) => {
      if (err || result.length === 0) {
        res.status(404).send({ message: 'Village non trouvé' });
        return;
      }
      res.status(200).json(result[0]);
    });
  } catch(err){
    res.status(500).send({ error: err });
  }
};

// Recuperer les campagnes en se basant sur les specifications et les villages
exports.getCampagneBySpecAndVillage = (req, res) => {
  try{
    const id_speculation = req.params.id;
    const role = session.user.id_village

    Campagne.getBySpeculationAndVillage(id_speculation,role, (err, result) => {
    if (err || result.length === 0) {
      res.status(404).send({ message: 'Campagne non trouvé' });
      return;
    }
    res.status(200).json(result[0]);
    });
    
  } catch(err){
    res.status(500).send({ error: err });
  }
};

