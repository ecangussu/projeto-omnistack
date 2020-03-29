//routes.js = armazena as rotas da aplicação 
const express = require('express');
//Importando celebrate
const { celebrate, Segments, Joi } = require('celebrate');
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
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);
//rota para deletar um caso dentro do nosso banco de dados
routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IncidentController.delete);

//Exportar uma variável/rotas de dentro de um arquivo 
module.exports = routes;