const express=require('express');
const app=express();
const port=3000;
app.use(express.json())
const database=[{id:1,name:"pushpendra",age:23},{id:2,name:"saurabh",age:22},{id:3,name:"prashant",age:24}

]
// create(c)
app.post('/users',(req,res)=>{
    const newuser={
        id:database.length+1,
        name:req.body.name,
        age:req.body.age
    }
    database.push(newuser);
    res.status(201).json(newuser);
})
// READ(r)---read all user
app.get('/users',(req,res)=>{
    res.json(database);
});
// read one user
app.get('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id)
    const user=database.find(u=>u.id==userid)
    if(user){
        res.json(user);
    } else {
        res.status(404).json({message:"user not found"});
    }
});
// update(u)
app.put('/users/:id',(req,res)=>{
    const userid=parseInt(req.params.id)
    const userIndex=database.findIndex(u=>u.id==userid)
    if(userIndex!=-1){
        database[userIndex]={...database[userIndex],...req.body}
        res.json(database[userIndex])
    } else {
        res.status(404).json({message:"user not found"});
    }
});


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})