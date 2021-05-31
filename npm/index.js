const chalk=require("chalk");
const validator=require("validator");

console.log(chalk.red("Chalk module is used"))
console.log(chalk.red.underline("Chalk module is used"))
const res=validator.isEmail("m@g.com");
console.log(res);