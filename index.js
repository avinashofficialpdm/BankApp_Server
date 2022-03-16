// importing express 
const express = require ("express")

const dataService=require ("./services/dataservice")

// creating an app using express
const app=express()

app.use(express.json())
// resolve http requests from client


// GET -to read data
app.get('/',(req,res)=>{
    res.status(401).send("get methode")
})

// POST -to create data
app.post('/register',(req,res)=>{
    const result=dataService.register(req.body.acno,req.body.uname,req.body.password)
    res.status(result.statusCode).json(result)
})

app.post('/login',(req,res)=>{
    const result=dataService.login(req.body.acno,req.body.password)
    res.status(result.statusCode).json(result)
})

app.post('/deposit',(req,res)=>{
    const result=dataService.deposit(req.body.acno,req.body.password,req.body.amt)
    res.status(result.statusCode).json(result)
})


// PUT -to update/modify data
app.put('/',(req,res)=>{
    res.send("put methode")
})

// PATCH -to update partially data
app.patch('/',(req,res)=>{
    res.send("patch methode")
})

// DELETE -to delete data
app.delete('/',(req,res)=>{
    res.send("delete methode")
})


// setup the port number and running the server
app.listen(3000,()=>{
    console.log("Server is running in 3000 port");
})