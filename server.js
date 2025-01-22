const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const prodRoutes = require('./routes/census/productor.routes');
const specRoutes = require('./routes/Configuration/speculations.routes');
const semencierRoutes = require('./routes/census/semencier.routes');
const opRoutes = require('./routes/census/op.routes');
const daaderRoutes = require('./routes/Configuration/Users/daaders.routes');
const ddaderRoutes = require('./routes/Configuration/Users/ddaders.routes');
const draderRoutes = require('./routes/Configuration/Users/draders.routes');
const pasRoutes = require('./routes/Configuration/Users/pas.routes');
const villageRoutes = require('./routes/Configuration/Users/village.routes');
const campagnesRoutes = require('./routes/census/campagnes.routes');
const ReportRoutes = require('./routes/reporting/reporting.routes');
//const semencesRoutes = require('./routes/semences.routes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour analyser les cookies
app.use(cookieParser());

// Middleware pour les sessions
app.use(session({
  secret: 'mot_de_passe_de_la_session',
  resave: false, // Ne sauvegarde que lorsque c'est necessaire
  saveUninitialized: false, // Évite de sauvegarder des sessions non initialisées
  cookie: {
    secure: false, 
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // Durée de vie de 24 heures pour les cookies
  }
}));


// Middleware pour analyser le corps des requêtes
app.use(bodyParser.json());

// Utilisation des Routes 
app.use('/api/prod', prodRoutes);
app.use('/api/spec', specRoutes);
app.use('/api/semencier', semencierRoutes);
app.use('/api/op', opRoutes);
app.use('/api/daader', daaderRoutes);
app.use('/api/drader', draderRoutes);
app.use('/api/ddader', ddaderRoutes);
app.use('/api/village', villageRoutes);
app.use('/api/campagnes', campagnesRoutes);
app.use('/api/pas', pasRoutes);
app.use('/api/report', ReportRoutes);


// Route de test pour la session
app.get('/api/session', (req, res) => {
  if (!req.session.views) {
    req.session.views = 1;
    res.send('Bienvenue, c\'est votre première visite !');
  } else {
    req.session.views++;
    res.send(`Nombre de visites : ${req.session.views}`);
  }
});


// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
