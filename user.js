const mongoose=require("mongoose")

const userschema= new mongoose.Schema({
  name:String,  
  email:String,  
  password:String,  
  grid:Number
})

let user=mongoose.model("userdata",userschema)

module.exports=user