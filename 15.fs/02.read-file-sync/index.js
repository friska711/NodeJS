const fs = require('fs');

function read(){
    const data = fs.readFileSync('hello.txt')
    console.log(data.toString())

}

exports.read = fs.readFileSync