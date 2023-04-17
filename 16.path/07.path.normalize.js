const path = require('path')
const fs = require('fs')
const filePath = __dirname + '../15.fs/03.append/file/hello.txt'
// \Users\FRISKA SINAGA\LatihanVsCode\NodeJS\16.path../15.fs/03.append/file/hello.txt
const normalizedFilePath = path.normalize(filePath)
// \Users\FRISKA SINAGA\LatihanVsCode\NodeJS\15.fs/03.append/file/hello.txt
console.log({filePath, normalizedFilePath})
const data = fs.readFileSync(filePath)
console.log(data. toString())