const http = require("http");

const server = http.createServer((req,res) => {
    console.log(req.url , req.method , req.headers);
    // process.exist();  // this line will stop the server (i.e stop the event loop process)
})

server.listen(8080,() => {
    console.log("Server is running on port 8080");
})

