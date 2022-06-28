const { json } = require('body-parser')
const Organizador = require('../model/Organizador')

module.exports = app => {
   app.get('/Organizador', (req, res) => {
      // retorna os dados??
      Organizador.lista(res)
   })
   app.get('/Organizador/:id',(req, res) => {
      let id = parseInt(req.params.id)
      Organizador.buscaPorId(id, res)
   })
   app.post('/Organizador', (req, res) => {
      console.log(req.body)
      Organizador.adiciona(req.body, res)
   })
   //PUT??
   app.patch('/Organizador/:id',(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      Organizador.altera(id, valores, res)
   })
}
//Testar POST - Abra o CMD no windows
//curl -d "id_Jogadores_fk=1" http://localhost:3000/Organizador