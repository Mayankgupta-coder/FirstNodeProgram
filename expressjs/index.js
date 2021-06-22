const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello world from express");
});
app.get("/about",(req,res)=>{
    res.send("Hello world from about page");
});
app.get("/html",(req,res)=>{
    res.send("<h1>Hello world from html page</h1>");
});
app.get("/json",(req,res)=>{
    res.send({
        id:1,
        name:"Mayank",
    });
});
app.listen(8000,()=>{
    console.log("Listening the port at 8000");
});