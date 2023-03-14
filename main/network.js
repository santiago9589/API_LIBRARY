const routesBooks = require("../components/books/network")
const routesUser = require("../components/users/network")
const routesAdmin = require("../components/admin/network")

const serverWithRoutes = (server) =>{
    server.use("/api/books",routesBooks)
    server.use("/api/users",routesUser)
    server.use("/api/admin",routesAdmin)
}


module.exports = serverWithRoutes