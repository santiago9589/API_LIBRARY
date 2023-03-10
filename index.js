const { json } = require("express")
const express  = require("express")
const routes = require("./main/network")
require('dotenv').config()



const app = express()
app.use(json())
app.use(express.urlencoded({extended:false}))
const PORT = process.env.PORT || 4000

routes(app)


app.listen(PORT,()=>{
    console.log("server online")
})