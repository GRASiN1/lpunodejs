let fs = require('fs');
console.log("Going to write into existing file");
fs.writeFile('input.txt', 'Simply Easy leaning!', function(err){
    if(err){
        return console.error(err);
    }
    console.log
});