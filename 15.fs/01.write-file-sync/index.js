const fs = require('fs');

function write(){
    fs.writeFileSync('hello.txt', 'Hello from Node.js', {
        encoding: 'utf8',
    });
}

exports.write = fs.writeFileSync


