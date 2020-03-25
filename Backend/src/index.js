//importar as funcionalidades do express
//express (sem ponto antes porque é um arquivo)
const express = require('express'); 

//criação da aplicação
const app = express(); 

//Importar variáveis/rotas
//./routes porque é um arquivo 
const routes = require('./routes');

//Importar o cors
const cors = requeire('cors');
   
//Informar ao app que estaremos usando json para o corpo das requisições 
//Express vai até o corpo da requisição e converte o json em um objeto do javascript (se torna entendível pela aplicação) 
app.use(express.json());
app.use(routes);

app.use(cors());

//aplicaçãp "ouve" a porta 3333 -> localhost:3333 = acessa a sua aplicação
app.listen(3333);

/*
 * npm start = startar serviço
 */ 

/*
 * npx: executar um pacote 
 * npm: instalar um pacote
 */

/*
 * '/' = rota
 * '/users' = recurso
 */

/*
 * Métodos HTTP:
 *
 * GET: quando queremos buscar/listar uma informação do backend 
 *      usado para acessar a rota do navegador 
 * POST: quando queremos criar uma informação no backend 
 * PUT: quando queremos alterar uma informação do backend
 * DELETE: quando queremos deletar uma informação do backend  
 * 
 */

/*
 * Tipos de parâmetros:
 *
 * QUERY PARMS: parâmetros nomeados enviados na rota após o símbolo de "?" 
 *        Servem para filtros, paginação, etc
 *        /users?name=Estevao&page=2
 *        request.query
 * ROUTE PARAMS: parâmetros utilizados para identificar recursos
 *        Servem para identificar um único recurso
 *        /users/:id = /users/1
 *        request.params
 * REQUEST BODY: corpo da requisição utilizado para criar ou alterar recursos
 *        request.body
 * 
 */

/*
 * REQUEST: guarda todos os dados que vem através da resquisição do usuário
 * RESPONSE: retorna uma resposta ao usuário
 *  
 */

/* 
 * BANCO DE DADOS
 * 
 * SQL: linguagem utilizada para se comunicar com o banco de dados = MySQL, Oracle, SQLite, PostgreSQL 
 * NoSQL: MongoDB, CouchDB etc
 * 
 * Instalação:
 * 
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 * 
 */ 