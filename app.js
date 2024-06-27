const http = require("http");

const server = http.createServer((req,res) => {
    console.log(req.url , req.method , req.headers);
    // process.exist();  // this line will stop the server (i.e stop the event loop process)
    const url = req.url;
    // send response

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action = "/message" method = "POST"><input type="text" name="message" /><button type="submit">save</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type' , 'text/html');
    res.write('<html>');
    res.write('<head><title>Node server</title></head>');
    res.write('<body><h1>Hello form my node js server</h1></body>');
    res.write('</html>');
    res.end();

})

server.listen(8080,() => {
    console.log("Server is running on port 8080");
})

