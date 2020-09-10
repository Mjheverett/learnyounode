'use strict'

const fs = require("fs");
const path = require("path");

const directory = process.argv[2];
const filterType = '.' + process.argv[3];

// console.log("directory", directory);
// console.log("filter type", filterType)

fs.readdir(directory, (err, list) => {
    if (err) {
        return console.log(err);
    }
    list.map(function(file) {
        if (path.extname(file) === filterType) {
            console.log(file);
        }
    });
});