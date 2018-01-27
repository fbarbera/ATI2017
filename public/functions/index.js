// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');

const doorsControllers = require('./doors_controllers.js');


function setupMiddlewares(app) {
    // Automatically allow cross-origin requests
    app.use(cors());
    // Support JSON encoded body
    app.use(express.json());
    // Support encoded body
    app.use(express.urlencoded({extended: true }));
}

const app = express();
// Setup application middlewares
setupMiddlewares(app);
// Define routes!

app.put('/admin/acceso/:id_acceso', acceso_controllers.update);
app.post('/admin/acceso/:', acceso_controllers.create);
app.get('/admin/acceso/', acceso_controllers.list);
app.get('/admin/acceso/:id_acceso', acceso_controllers.get);
app.delete('/admin/acceso/:id_acceso', acceso_controllers.remove);


app.put('/admin/puerta/:id_puerta', doors_ontrollers.update);
app.post('/admin/puerta/:', doors_ontrollers.create);
app.get('/admin/puerta/', doors_ontrollers.list);
app.get('/admin/puerta/:id_puerta', doors_ontrollers.get);
app.delete('/admin/puerta/:id_puerta', doors_ontrollers.remove);

app.put('/admin/usuario/:id_usuario', usuario_controllers.update);
app.post('/admin/usuario/:', usuario_controllers.create);
app.get('/admin/usuario/', usuario_controllers.list);
app.get('/admin/usuario/:id_usuario', usuario_controllers.get);
app.delete('/admin/usuario/:id_usuario', usuario_controllers.remove);

// Connect our Express Application with Firebase Functions ecosystem!
exports.api = functions.https.onRequest(app);
