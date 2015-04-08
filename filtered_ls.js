var fs = require('fs');


fs.readdir(process.argv[2], function notls(err, list) {
    if (err) throw err;

    list.forEach(function(dir) {

        if(path.extname(dir) === '.' + process.argv[3]) {
            console.log(dir);
        }
        
    });

});
