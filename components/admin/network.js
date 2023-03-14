const express = require("express")
const controller = require("./controller")
const responseFile = require("../../main/response")



const router = express.Router()

router.post("/register",(req,res)=>{
    controller.registerAdmin(req.body.email,req.body.password).then((response) => {
        responseFile.succes(req, res,response, 200)
    }).catch((e) => {
        responseFile.fail(req, res, e.message, 400, "Error en el controlador")
    })
})

router.post("/login",(req,res)=>{
    controller.loginAdmin(req.body.email,req.body.password).then((response) => {
        responseFile.succes(req, res,response, 200)
    }).catch((e) => {
        responseFile.fail(req, res, e.message, 400, "Error en el controlador")
    })
})







module.exports = router


