const express = require ("express")
const routes = express.Router()

lista = [   {"id":1,"nome":"Evandro","idade":27},
            {"id":2,"nome":"Maria","idade":37},
            {"id":3,"nome":"João","idade":22},]

routes.get("/",(req,res)=>{
    res.status(200).json(lista)
})
routes.get("/:id",(req,res)=>{
    res.status(200).json(lista[req.params.id-1])
})
routes.delete("/:id",(req,res)=>{
    lista.splice(req.params.id-1,1)
    res.status(200).redirect("/")
})



module.exports = routes



