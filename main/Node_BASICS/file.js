const fs = require('fs')
const os = require('os')

console.log(os.cpus().length)
//Synchronous call
// fs.writeFileSync('./test.txt', 'Hey')


//Asynchronous
// fs.writeFile('./test.txt', "hello", (err) => {} )

// const res = fs.readFileSync('./contact.txt', 'utf-8')
// console.log(res)

fs.readFile('./contact.txt', 'utf-8', (err, result) => {
    if(err){
    console.log('error', err)
}
else{
    console.log(result)
}
})

fs.appendFileSync('./test.txt', `hello\n`)

fs.cpSync('./test.txt', './copy.txt')
fs.unlinkSync('./copy.txt')
console.log(fs.statSync('./test.txt'))
fs.mkdirSync('mydocs/a/b', {recursive : true})

//synchronous way of reading is blocking request , it blocks a thread for its task , and after its whole execution , it releases that thread for another work
// non blocking request do the vice versa
// thread pool deafult size = 4
// max? - 8 core cpus = 8