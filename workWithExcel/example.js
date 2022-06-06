let xlsx = require("xlsx"); //module in js
let fs = require("fs");
let data = require("./excel.json");

// // wb-> filePath, ws -> name, json data 
// // new worksheet 
function excelWriter(filePath, json, sheetName) {

    let newWB = xlsx.utils.book_new();//create new wb
    let newWS = xlsx.utils.json_to_sheet(json);//create new ws
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);//adding ws into wb
    xlsx.writeFile(newWB, filePath);//
}


// read 
//  workbook get
function excelReader(filePath, sheetName) {
    if (fs.existsSync(filePath) == false) {
        return [];
    }
    let wb = xlsx.readFile(filePath);//read wb
    let excelData = wb.Sheets[sheetName];//read ws
    let ans = xlsx.utils.sheet_to_json(excelData);//get data inside ws
    return ans;

}
