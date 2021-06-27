const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");
console.log(__dirname);
const staticPath=path.join(__dirname,"public/");
console.log(staticPath);
// app.use(express.static(staticPath));
const templatePath=path.join(__dirname,"template/views");
const partialPath=path.join(__dirname,"template/partials");
app.set("view engine",'hbs');
// If we change folder name from views to other
app.set("views",templatePath);
hbs.registerPartials(partialPath);
app.get("/",(req,res)=>{
    res.render("index.hbs",{
        name:"Mayank",
    });
});
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