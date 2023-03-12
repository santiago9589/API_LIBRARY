const express = require("express")
const controller = require("./controller")
const responseFile = require("../../main/response")


const router = express.Router()

router.post("/",(req,res)=>{
    controller.addUser(req.body.name,req.body.password).then((response) => {
        responseFile.succes(req, res,response, 200)
    }).catch((e) => {
        responseFile.fail(req, res, e.message, 400, "Error en el controlador")
    })
})

router.post("/ask/:id",(req,res)=>{
    const {id} = req.params
    controller.askBook(id,req.body.id).then((response) => {
        responseFile.succes(req, res,response, 200)
    }).catch((e) => {
        responseFile.fail(req, res, e.message, 400, "Error en el controlador")
    })
})

router.get("/",(req,res)=>{
    controller.getUsers().then((response) => {
        responseFile.succes(req, res,response, 200)
    }).catch((e) => {
        responseFile.fail(req, res, e.message, 400, "Error en el controlador")
    })
})



module.exports = router