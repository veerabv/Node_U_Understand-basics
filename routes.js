const fs = require("fs");

const handleReq = (req,res) => {
    const url = req.url;
    const method = req.method;
    // send response
  
    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>Enter message</title></head>");
      res.write(
        '<body><form action = "/message" method = "POST"><input type="text" name="message" /><button type="submit">save</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
  
    if (url === "/message" && method === "POST") {
      const body = [];
      let message;
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
  
      return req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        message = parsedBody.split("=")[1];
        //writeFileSync vs writeFile => sync will block the thread of execution while the other will follow the event driven model
        fs.writeFile("message.txt", message, (err) => {
          res.statusCode = 302;
          res.setHeader("location", "/");
          return res.end();
        });
      });
    }
  
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node server</title></head>");
    res.write("<body><h1>Hello form my node js server</h1></body>");
    res.write("</html>");
    res.end();

}

// module.exports = handleReq

// module.exports = {
//     handleReq ,
//     someText : "some random text"
// }

// module.exports.handleReq = handleReq;
// module.exports.someText = "some random text";

exports.handleReq = handleReq;
exports.someText = "some random text";