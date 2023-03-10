const routesBooks = require("../components/books/network")


const serverWithRoutes = (server) =>{
    server.use("/api/books",routesBooks)
}


module.exports = serverWithRoutes