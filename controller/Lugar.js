const { json } = require('body-parser')
const Lugar = require('../model/Lugar')

module.exports = app => {
   app.get('/Lugar', (req, res) => {
      // retorna os dados??
      Lugar.lista(res)
   })
   app.get('/Lugar/:id',(req, res) => {
      let id = parseInt(req.params.id)
      Lugar.buscaPorId(id, res)
   })
   app.post('/Lugar', (req, res) => {
      console.log(req.body)
      Lugar.adiciona(req.body, res)
   })
   //PUT??
   app.patch('/Lugar/:id',(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      Lugar.altera(id, valores, res)
   })
}
//Testar POST - Abra o CMD no windows
//curl -d "endereço=Rua 1&nome=Campo1&capacidade=10000" http://localhost:3000/Lugar