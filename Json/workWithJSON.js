let fs = require("fs");
let buffer = fs.readFileSync("./example.json");//it will give binnary form data
console.log(buffer);
console.log("``````````````````````````````");
let data = JSON.parse(buffer);//.parse it convert binnary data into string form
console.log(data);


//let data = require("./example.json"); // we can use this to read data from file, it can skip/replace 2-5 line code

// to add data in json file
data.push({
         "name": "Thor",
         "last Name": "Rogers",
         "isAvenger": true,
         "friends": [
             "Bruce",
             "Neter",
             "Natasha"
         ],
        "age": 45,
         "address": {
             "city": "New York",
            "state": "manhatten"
        }
     });

     let stringData = JSON.stringify(data);//convert data into string
     fs.writeFileSync("example.json", stringData); //