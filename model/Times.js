const res = require('express')
const conexao = require('../infra/connection')

class Times{

    adiciona(Times, res){
        let sql = 'INSERT INTO Times SET ?'
        conexao.query(sql,Times,(erro, resultado)=> {
            if(erro){
                res.status(400).json(resultado)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    lista(res){
        const sql = 'SELECT * FROM Times'
        conexao.query(sql, (erro, resultado) => {
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    buscaPorId(id, res){
        let sql = 'SELECT * FROM Times WHERE id=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

    altera(id, valores, res){
        let sql = 'UPDATE Times SET ? WHERE id=?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }

}
module.exports = new Times