var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function notls(err, list) {

    if (err) throw err;

    list.forEach(function(dir) {
        /* 
         * Filter directory by extention name
         */
        if(path.extname(dir) === '.' + process.argv[3]) {
            console.log(dir);
        }
        
    });

});
