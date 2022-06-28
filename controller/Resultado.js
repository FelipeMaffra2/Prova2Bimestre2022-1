const { json } = require('body-parser')
const Resultado = require('../model/Resultado')

module.exports = app => {
   app.get('/Resultado', (req, res) => {
      // retorna os dados??
      Resultado.lista(res)
   })
   app.get('/Resultado/:id',(req, res) => {
      let id = parseInt(req.params.id)
      Resultado.buscaPorId(id, res)
   })
   app.post('/Resultado', (req, res) => {
      console.log(req.body)
      Resultado.adiciona(req.body, res)
   })
   //PUT??
   app.patch('/Resultado/:id',(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      Resultado.altera(id, valores, res)
   })
}
//Testar POST - Abra o CMD no windows
//curl -d "placar=2x1&id_Partida_fk=1" http://localhost:3000/Resultado