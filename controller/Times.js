const { json } = require('body-parser')
const Times = require('../model/Times')

module.exports = app => {
   app.get('/Times', (req, res) => {
      // retorna os dados??
      Times.lista(res)
   })
   app.get('/Times/:id',(req, res) => {
      let id = parseInt(req.params.id)
      Times.buscaPorId(id, res)
   })
   app.post('/Times', (req, res) => {
      console.log(req.body)
      Times.adiciona(req.body, res)
   })
   //PUT??
   app.patch('/Times/:id',(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      Times.altera(id, valores, res)
   })
}
//Testar POST - Abra o CMD no windows
//curl -d "nome=TimeDaPelada&id_Jogadores_fk=1&id_Organizador_fk" http://localhost:3000/Times