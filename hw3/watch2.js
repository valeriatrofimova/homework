const fs = require("fs");
const filePath = "C:/Users/vtrofimova/Desktop/homework";
let file = fs.readdirSync(filePath);
console.log("\nThis is the initial content in the file: \n"+ file);

fs.watch(filePath, "utf8", function(event, fileName){
    console.log("\n--The file has changed!--");
    console.log("There was a " + event +" at " + fileName);
    file = fs.readdirSync(filePath);
    console.log("\nThe file now contais: \n" + file)
})