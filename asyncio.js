var fs = require('fs');

fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    if (err) throw err;
    console.log(fileContents.toString().split('\n').length-1);
});
