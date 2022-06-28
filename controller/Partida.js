const { json } = require('body-parser')
const Partida = require('../model/Partida')

module.exports = app => {
   app.get('/Partida', (req, res) => {
      // retorna os dados??
      Partida.lista(res)
   })
   app.get('/Partida/:id',(req, res) => {
      let id = parseInt(req.params.id)
      Partida.buscaPorId(id, res)
   })
   app.post('/Partida', (req, res) => {
      console.log(req.body)
      Partida.adiciona(req.body, res)
   })
   //PUT??
   app.patch('/Partida/:id',(req, res) =>{
      let id = parseInt(req.params.id)
      let valores = req.body
      Partida.altera(id, valores, res)
   })
}
//Testar POST - Abra o CMD no windows
//curl -d "id_Times_fk=1&id_Organizador_fk=Atacante&id_Jogadores_fk=1&id_Lugar_fk=1&id_Calendario_fk=1" http://localhost:3000/Partida