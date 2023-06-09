const { json } = require("express")
const express = require("express")
const routes = require("./main/network")
require('dotenv').config()
const db = require("./main/db")



const app = express()
app.use(json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));
const PORT = process.env.PORT || 4000
db(process.env.MONGO_DB).then(() => {
    console.log("Conectado con exito")
}).catch((error) => {
    console.error(error.message)
})




routes(app)


app.listen(PORT, () => {
    console.log("server online")
})