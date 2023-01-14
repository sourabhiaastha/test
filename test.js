// console.log("hello world");

// console.log("yoyo");
// var x = 10;
// var y =30;
// console.log(x+y);

// console.warn(x+y);


// const app = require('./app')

// console.log(app.z());

// const arr = [2,4,7,8,9,3,3]

// arr.filter((item)=>{
//     console.log(item);
// })

// let result = arr.filter((item)=>{
//     return item===3
// })

// console.log(result);
// console.warn(result);

// const http = require('http');

// http.createServer((req,resp)=>{
//     resp.write("hello bhaijaan")
//     resp.end();
// }).listen(4500)

// function datacontrol(req,resp)
// {
//     resp.write("<h1>hello</h1>");
//     resp.end();
// }

// http.createServer(datacontrol).listen(4500);

// const colors = require('colors');
// console.log("hello".yellow);
// console.log("hello");
// console.log(100+52);

// const http = require('http');
// const data = require('./data')
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'content':'Google'});
//     resp.write(JSON.stringify(data));
//     resp.end()
// }).listen(5000)

// console.log(process.argv[3]);

const fs = require('fs');
const input = process.argv;
// fs.writeFileSync(input[2],input[3])

// if(input[2]=='add')
// {
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid");
// }


// const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'file');
// console.log(dirpath);

// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirpath+"/hello"+i+".txt","hi");
// }

fs.readdir(dirpath,(err,file)=>{
    file.forEach((item)=>{
        console.log("file name",item);
    })
})