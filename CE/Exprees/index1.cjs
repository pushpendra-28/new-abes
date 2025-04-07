const express=require('express');
// const path=require('path')
const app=express();
const port=3000
app.use(express.json());
// const adi=[{name:"pushpendra"}]
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,"home.html"))
// })
// app.get('/AboutUs',(req,res)=>{
//     // res.send("this is my about page");
//     // res.json(adi);
    
// })
app.post('/api/abes',(req,res)=>{
    console.log("body is--",req.body)
res.json({})
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}) 