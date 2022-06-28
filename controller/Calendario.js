const { json } = require('body-parser')
const Calendario = require('../model/Calendario')

module.exports = app => {
   app.get('/Calendario', (req, res) => {
      // retorna os dados??
      Calendario.lista(res)
   })
   app.get('/Calendario/:id',(req, res) => {
      let id = parseInt(req.params.id)
      Calendario.buscaPorId(id, res)
   })
   app.post('/Calendario', (req, res) => {
      console.log(req.body)
      Calendario.adiciona(req.body, res)
   })
   //PUT??
   app.patch('/Calendario/:id',(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      Calendario.altera(id, valores, res)
   })
}
//Testar POST - Abra o CMD no windows
//curl -d "DataPartida=03/03/2022 01:01:01 http://localhost:3000/Calendario