const fs=require("fs");
// fs.writeFile("readasync.txt","This is asynchronous file",(err)=>{
//     console.log("Run");
// })
// fs.appendFile("readasync.txt","  Task completed",(err)=>{
//     console.log("Run");
// })
fs.readFile("readasync.txt","UTF-8",(err,data)=>{
    console.log(data);
})