var fs = require('fs');
var path = require('path');

module.exports = function listdir (dir_name, extension, callback) {
    fs.readdir(dir_name, function notls(err, list) {
        if (err)
            return callback(err);

        list = list.filter(function (file) {
            return path.extname(file) === '.' + extension
        })

        // Why don't we return the callback?
        callback(null, list);
    });
}

