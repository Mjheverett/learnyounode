'use strict'

const http = require("http");
const bl = require("bl");
const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');
    res.pipe(bl(function (err, data) {
        if err {
            return console.log(err);
        }
    }))
    res.on('error', (error) => {
        console.log(error);
    })
    res.on('end', () => {

    })
})