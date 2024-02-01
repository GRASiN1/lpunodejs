let fs = require("fs");
//Async
fs.readFile('input.txt', function(err, data){
    if(err){
        return console.error(err);
    }
    console.log("Asynchronous read : "+ data.toString());
});
//Sync
let data = fs.readFileSync('input.txt');
console.log("Synchronous read : "+data.toString());
console.log("Program ended");