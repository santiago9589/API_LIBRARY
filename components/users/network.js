const express = require("express")
const controller = require("./controller")
const responseFile = require("../../main/response")
const multer = require("multer")
const path = require("path")

const router = express.Router()

const multer_storage = multer.diskStorage({
    destination:"public/file",
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

const upload = multer({
    dest:"public/file",
    storage:multer_storage 
}).single('file');

router.post("/",upload,(req,res)=>{
    controller.addUser(req.body.email,req.body.password,req.file).then((response) => {
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

router.post("/back/:id",(req,res)=>{
    const {id} = req.params
    controller.backBook(id,req.body.id).then((response) => {
        responseFile.succes(req, res,response, 200)
    }).catch((e) => {
        responseFile.fail(req, res, e.message, 400, "Error en el controlador")
    })
})

router.delete("/:id",(req,res)=>{
    const {id} = req.params
    controller.deleteUser(id,req.body.id).then((response) => {
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


