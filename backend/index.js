// import { SignUp } from './api.js';

// var func1 = require('./api.js').SignUp;
// var var1 = require('./api.js').signupPath;
const setupBoilerplate = require('./server/server');


const { app, connection, listen } = setupBoilerplate();
const port = 8989;

// connection.connect();

// Bind REST controller to /api/*
const router = require('./controllers/rest.controller.js');

app.use('/api', router)

listen(port, () => {
  console.log('server listening on port', port);
});



// func1('Daniel', 'Strallhofer');
