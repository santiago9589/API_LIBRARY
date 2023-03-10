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


module.exports = router