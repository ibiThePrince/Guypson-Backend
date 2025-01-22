exports.authorizeRole = (role) => {
    return (req, res, next) => {
      const userRole = req.session.userRole; // Récupérer le rôle depuis la session
      if (userRole !== role) {
        return res.status(403).send({ message: 'Accès interdit' });
      }
      next();
    };
  };