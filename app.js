const http = require("http");

const server = http.createServer((req,res) => {
    console.log(req);
})

server.listen(8080,() => {
    console.log("Server is running on port 8080");
})