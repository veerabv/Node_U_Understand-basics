const http = require("http");
const routes = require("./routes");

console.log(routes.someText);
const server = http.createServer(routes.handleReq);

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});

