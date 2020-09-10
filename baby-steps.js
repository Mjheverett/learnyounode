'use strict'

const input = process.argv;

function sum(input) {
    let total = 0;
    for (let i = 2; i < (input.length); i++) {
        total = total + Number(input[i]);
    }
    console.log(total);
}

sum(input);