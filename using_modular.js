var listdir = require('./modular');

listdir(process.argv[2], process.argv[3], function(err, data) {
    data.forEach(function(i) {
        console.log(i);
    });
});
