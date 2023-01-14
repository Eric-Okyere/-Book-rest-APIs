const express = require ("express");
const server = express();
const bodyParser = require("body-parser");


const {
    handleCreateBook,
  handleDeleteBook,
    handleViewBook,
    handleUpdateBook
     }= require("./controllers")






// middleware
server.use(bodyParser.json());






server.get("/book", handleViewBook);
server.post("/book", handleCreateBook);
 server.put("/book", handleUpdateBook);
server.delete("/book", handleDeleteBook);



// connect to database
server.listen(5000, ()=> console.log("Server is ready to go"))
