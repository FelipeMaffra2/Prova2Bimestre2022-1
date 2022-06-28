const res = require('express')
const conexao = require('../infra/connection')

class Calendario{

    adiciona(Times, res){
        let sql = 'INSERT INTO Calendario SET ?'
        conexao.query(sql,Calendario,(erro, resultado)=> {
            if(erro){
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM Calendario'
        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    buscaPorId(id, res){
        let sql = 'SELECT * FROM Calendario WHERE id=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    altera(id, valores, res){
        let sql = 'UPDATE Calendario SET ? WHERE id=?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

}
module.exports = new Calendario