const http = require("http");
const routes = require("./routes");

console.log(routes.someText);
const server = http.createServer(routes.handleReq);

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});



// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method, req.headers);
//   // process.exist();  // this line will stop the server (i.e stop the event loop process)
//   const url = req.url;
//   const method = req.method;
//   // send response

//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title>Enter message</title></head>");
//     res.write(
//       '<body><form action = "/message" method = "POST"><input type="text" name="message" /><button type="submit">save</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end();
//   }

//   if (url === "/message" && method === "POST") {
//     const body = [];
//     let message;
//     req.on("data", (chunk) => {
//       // it is like event listener . this will run when a new chunk is received
//       console.log(chunk);
//       body.push(chunk);
//     });

//     return req.on("end", () => {
//       // this will run once the incoming request is  parsed fully
//       const parsedBody = Buffer.concat(body).toString();
//       console.log(parsedBody);
//       message = parsedBody.split("=")[1];
//       fs.writeFileSync("message.txt", message); // this will create the new file in the same directory witj message

//       res.statusCode = 302; // set response code  302 is redirection
//       res.setHeader("location", "/"); // this will change the location to localhost:8080/
//       return res.end();
//     });

//     // we will change the line inside the calback but it will not run the code as before because the callback will run after some time before that the below line runs and send the response .
//     //so add a return in the req.on itself
//         // res.statusCode = 302; // set response code  302 is redirection
//         //   res.setHeader("location", "/"); // this will change the location to localhost:8080/
//         //   return res.end();
//   }

//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>Node server</title></head>");
//   res.write("<body><h1>Hello form my node js server</h1></body>");
//   res.write("</html>");
//   res.end();
// });

// server.listen(8080, () => {
//   console.log("Server is running on port 8080");
// });
