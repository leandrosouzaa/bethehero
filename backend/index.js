const express = require('express');

const app = express();

app.use(express.json())

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar informações.
  * POST: Criar informações no backend.
  * PUT: Editar informações no backend.
  * DELETE: Deletar informações no backend
  * 
  * O navegador sempre executa o método GET.
  */

  /**
   * Tipos de Parâmetros:
   * 
   * Query (req.query): Parâmetros nomeados na rota enviados na rota após o símbolo de '?'
   * normalmente servem para realizar filtros, paginação. Para color mais de um parâmetro é
   * necessário utilizar o '&' ex: ?name=Leandro&idade=17.
   * 
   * Route (req.params): Utilizado para buscar um unico parâmetro, normalmente o ID de um usuário ou
   * algo do genêro.
   * 
   * Request Body (req.body): Corpo da requisição, utilizado para criar ou alterar informações.
   */


app.get('/', (req, res) => {
    return res.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Leandro Ribeiro de Souza'
    });
})

app.listen(3333);