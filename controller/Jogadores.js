const { json } = require('body-parser')
const Jogadores = require('../model/Jogadores')

module.exports = app => {
   app.get('/Jogadores', (req, res) => {
      // retorna os dados??
      Jogadores.lista(res)
   })
   app.get('/Jogadores/:id',(req, res) => {
      let id = parseInt(req.params.id)
      Jogadores.buscaPorId(id, res)
   })
   app.post('/Jogadores', (req, res) => {
      console.log(req.body)
      Jogadores.adiciona(req.body, res)
   })
   //PUT??
   app.patch('/Jogadores/:id',(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      Jogadores.altera(id, valores, res)
   })
}
//Testar POST - Abra o CMD no windows
//curl -d "nome=Felipe&posicao=Atacante" http://localhost:3000/Jogadores