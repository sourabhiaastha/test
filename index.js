const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'crud');
const filepath = dirpath+'/yoyo'+'.txt'

// fs.writeFileSync(dirpath+'/hello'+'.txt','this is sample');
// fs.writeFileSync(filepath,'this is sample');

// read
// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item)
// });
// update

// fs.appendFile(filepath,'and file is good apple.txt',(err)=>{
//     if(!err)console.log("file is update")
// });
// rename
// fs.rename(filepath,dirpath+'/jojo'+'.txt',(err)=>{
//     if(!err)console.log("file is updated")
// })

fs.unlinkSync(dirpath+'/jojo'+'.txt')