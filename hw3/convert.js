const fs = require('fs');
var json2xls = require('json2xls');
const filename = 'jsonToXlsx.xlsx';
const filePath = './jsonToXlsx.json'
fs.readFile(filePath, 'utf8', (err, allJson) => {


    const json = JSON.parse(allJson)

    var convert = function () {
        var xls = json2xls(json);
        fs.writeFile(filename, xls, 'binary', (err) => {
            if (err) {
                console.log("writeFile :", err);
            }
            console.log(filename + " file is saved!");
        });
    }
    convert()
})

