const EventEmitter=require("events");
const event=new EventEmitter();
event.on("func",()=>{
 console.log("Heloo");
});
event.on("func",()=>{
    console.log("Heloo Aryan khanna");
   });
event.emit("func");