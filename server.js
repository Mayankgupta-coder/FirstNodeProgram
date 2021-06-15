const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
    res.end("Hello Mayank this is home page");
    }
    if(req.url=="/about")
    {
        res.end("Hello Mayank this is about page");
    }
    else{
        res.writeHead(404)
        res.end("Error page");
    }
})
server.listen(8000,"127.0.0.1",()=>{
    console.log("Port is listening");
})