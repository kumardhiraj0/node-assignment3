const fs = require("fs");
const http = require("http");
const Your_Name = "Dhiraj Kumar"

fs.writeFile("index.html", `<h1> Hello World  </h1>
<p> This is ${Your_Name}... </p>`,(err)=>{
    console.log(err)
});

const server = http.createServer((req,res)=>{
    fs.readFile("index.html",(err,data)=>{
        res.writeHead(200,{
            "Content-type": "text/html", 
        })
        res.write(data);
        res.end();

    })
})
server.listen(5000,()=>{console.log("server started at port number 50000")})

