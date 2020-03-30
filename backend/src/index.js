const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
/* antes de todas as requisicao converter em algo entendido pela aplicacao*/
/*
 * Rota = recurso
 */

 /*
  * Metodos HTTP:
  * 
  * GET: Busca/listar uma informação do backend. 
  * POST: Criar uma informacao no backend
  * PUT: Alterar uma informacao no backend
  * DELETE: Deletar uma informacao no backend 
  */
/*
 * Tipos de paramtros
 * Query:  Parametros nomeados enviados na rota apos o simbolo "?", geralmente
 * filtros, paginação.
 * Route Params: Parametros utilizados para identificar recursos
 * por exemplo quero trazer o usuario com id 1: na rota get posso acrescentar ->users/1
 * Request Body: Ele é o corpo da requisicao utilizado para criar ou alterar recursos
 */
app.listen(3333);
