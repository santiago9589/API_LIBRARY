const express = require("express")
const controller = require("./controller")
const responseFile = require("../../main/response")


const router = express.Router()

router.get("/",(req,res)=>{
    controller.getBooks().then((response) => {
        responseFile.succes(req, res,response, 200)
    }).catch((e) => {
        responseFile.fail(req, res, e.message, 400, "Error en el controlador")
    })
})

router.post("/",(req,res)=>{
    controller.addBook(req.body.name,req.body.gender).then((response) => {
        responseFile.succes(req, res,response, 200)
    }).catch((e) => {
        responseFile.fail(req, res, e.message, 400, "Error en el controlador")
    })
})

router.get("/:id",(req,res)=>{
    const {id} = req.params
    controller.getBook(id).then((response)=>{
        responseFile.succes(req,res,response,200)
    }).catch((e)=>{
        responseFile.fail(req,res,e.message,400,"Error en el controlador")
    })
})

router.put("/:id",(req,res)=>{
    const {id} = req.params
    controller.updateBook(id,req.body.name,req.body.gender).then((response)=>{
        responseFile.succes(req,res,response,200)
    }).catch((e)=>{
        responseFile.fail(req,res,e.message,400,"Error en el controlador")
    })
})

router.delete("/:id",(req,res)=>{
    const {id} = req.params
    controller.deleteBook(id).then((response)=>{
        responseFile.succes(req,res,response,200)
    }).catch((e)=>{
        responseFile.fail(req,res,e.message,400,"Error en el controlador")
    })
})

router.delete("/",(req,res)=>{
    controller.deleteAllBooks().then((response)=>{
        responseFile.succes(req,res,response,200)
    }).catch((e)=>{
        responseFile.fail(req,res,e.message,400,"Error en el controlador")
    })
})





module.exports = router