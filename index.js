// console.log("First Node program");
// const { read } = require("fs");
// const os = require("os");
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.type());
// repl=>read,eval,print,loop8

const fs=require("fs");
// fs.writeFileSync("read.txt","This is the first file created. ");
// fs.appendFileSync("read.txt","data appended");
const data=fs.readFileSync("read.txt");

const original_data=data.toString();
console.log(original_data);
fs.renameSync("read.txt","readwrite.txt");