// verifie si l'utilisateur est un village

const isVillage = (req, res, next) => {
  const user = req.user;
  if (user.type !== 'village') {
    return res.status(403).send({ message: 'Vous ne pouvez pas accéder à ces informations' });
  }
  next();
};

// verifie si l'utilisateur est un pas
    const isPas = (req, res, next) => {
  const user = req.user;
  if (user.type !== 'pas') {
    return res.status(403).send({ message: 'Vous ne pouvez pas accéder à ces informations' });
  }
  next();
};

// verifie si l'utilisateur est un daader

const isDaader = (req, res, next) => {
  const user = req.user;
  if (user.type !== 'daader') {
    return res.status(403).send({ message: 'Vous ne pouvez pas accéder à ces informations' });
  }
  next();
};

// verifie si l'utilisateur est un drader

const isDrader = (req, res, next) => {
  const user = req.user;
  if (user.type !== 'drader') {
    return res.status(403).send({ message: 'Vous ne pouvez pas accéder à ces informations' });
  }
  next();
}

// verifie si l'utilisateur est un ddader
const isDdader = (req, res, next) => {
  const user = req.user;
  if (user.type !== 'ddader') {
    return res.status(403).send({ message: 'Vous ne pouvez pas accéder à ces informations' });
  }
  next();
}

module.exports = {
  isVillage,
  isPas,
  isDaader,
  isDrader,
  isDdader
}