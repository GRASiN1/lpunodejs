let fs = require('fs');
console.log('Going to read from directory /tmp');
fs.readdir('/tmp/', function(err,files){
    if(err) return console.error(err);
    files.forEach(function(file){
        console.log(file);
    });
});