'use strict'

const fs = require("fs");
const path = require("path");

module.exports = function myModule(directory, extension, callback) {
    extension = '.' + extension;
    fs.readdir(directory, (err, list) => {
        if (err) {
            return callback(err);
        }
        const filteredList = list.filter((file) => {
            if (path.extname(file) === extension) {
                return file;
            }
        });
        callback(null, filteredList);
    });
}