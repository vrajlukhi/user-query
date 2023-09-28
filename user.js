const mongoose=require("mongoose")

const userschema= new mongoose.Schema({
  name:String,  
  gender:String,  
  shirt_size:String,  
  language:String
})

let user=mongoose.model("userdata",userschema)

module.exports=user