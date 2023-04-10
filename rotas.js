const express = require ("express")
const routes = express.Router()

lista = [   {"id":1,"nome":"Evandro","idade":27},
            {"id":2,"nome":"Maria","idade":37},
            {"id":3,"nome":"João","idade":22},]

routes.get("/",(req,res)=>{
    res.status(200).json(lista)
})


module.exports = routes



