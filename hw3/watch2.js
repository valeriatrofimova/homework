const fs = require("fs");
const filePath = "C:/Users/vtrofimova/Desktop/homework";
let file = fs.readdirSync(filePath);
console.log("\nThis is the initial content in the file: \n"+ file);

fs.watch(filePath, "utf8", function(event, fileName){
    if(fileName.endsWith('.csv')){
        fs.writeFile('changes.json',JSON.stringify(event + ":" + fileName), function (err) {
             if (err) return console.log(err);
  })
   }})  
  