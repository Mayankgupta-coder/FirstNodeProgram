const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("Hello world from express");
});
app.get("/about",(req,res)=>{
    res.send("Hello world from about page");
});

app.listen(8000,()=>{
    console.log("Listening the port at 8000");
});