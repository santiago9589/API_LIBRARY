const routesBooks = require("../components/books/network")
const routesUser = require("../components/users/network")

const serverWithRoutes = (server) =>{
    server.use("/api/books",routesBooks)
    server.use("/api/users",routesUser)
}


module.exports = serverWithRoutes