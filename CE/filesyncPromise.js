// const { isUtf8 } = require("buffer");
const fs=require("fs/promises");
// .promises() krke bhi likkh skte h
const read=()=>{
    const data=fs.readFile("./data.txt","utf-8");
    console.log(data)
}
const write=async()=>{
    const newdata="this is my new work";
    await fs.writeFile("./data.txt",newdata,"utf-8");
}
write();
console.log("first")
console.log("second")