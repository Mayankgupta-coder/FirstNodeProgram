const chalk=require("chalk");
const validator=require("validator");

console.log(chalk.red("Chalk module is used"))
console.log(chalk.yellow.underline("Chalk module is used"))
const res=validator.isEmail("m@gmail.com");
console.log(res);


// C:\Users\HP\AppData\Roaming\npm