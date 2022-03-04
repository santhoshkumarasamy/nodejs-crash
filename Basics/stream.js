// Streams allows us read large files in form of chunks(buffer)

const fs = require('fs')

const readStream  = fs.createReadStream('./docs/test2.txt',{highWaterMark:3450,encoding:"utf-8"})
const writeStream  = fs.createWriteStream('./docs/test3.txt')
/*
readStream.on('data',(chunck)=>{
    console.log("------- New Buffer --------")
    console.log(chunck)
    writeStream.write('\nNEW CHunck\n')
    writeStream.write(chunck)
})
*/

// Instead of writing the above code, with use of "PIPE" we can directly send data from a readStream to writeStream as below

readStream.pipe(writeStream) // This will directly the data from readStream into the writeStream