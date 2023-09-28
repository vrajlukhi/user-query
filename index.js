const express=require("express")
const connect = require("./db")
const user = require("./user")
let app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).send("welcome to api")
})
app.get("/user",async(req,res)=>{
    let{gender}=req.params
    let data = await user.find({gender: gender})
    res.status(200).send(data)
})
app.post("/user",async(req,res)=>{
    await user.create(req.body)
    res.status(201).send(req.body)
})

app.listen(8090,()=>{
    console.log("8090 srver");
    connect()
})