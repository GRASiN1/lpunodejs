let fs = require('fs');
console.log("Going to delete the file");
fs.unlink('input.txt', function(err){
    if(err) console.log(err)
    console.log('File deleted successfully');
});