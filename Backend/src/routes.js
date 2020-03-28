//routes.js = armazena as rotas da aplicação 
const express = require('express');
//Importando a OngController
const OngController = require('./controllers/OngController');
//Importando a IncidentController
const IncidentController = require('./controllers/IncidentController');
//Importando o ProfileController
const ProfileController = require('./controllers/ProfileController');
//Importando o SessionController
const SessionController = require('./controllers/SessionController');
//Desacoplar o módulo de rotas do express em uma variável 
const routes = express.Router();

routes.post('/sessions', SessionController.create);

//Rota para listar todas as ongs do banco de dados
routes.get('/ongs', OngController.index);
//criando rota
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
//rota para deletar um caso dentro do nosso banco de dados
routes.delete('/incidents/:id', IncidentController.delete);

//Exportar uma variável/rotas de dentro de um arquivo 
module.exports = routes;