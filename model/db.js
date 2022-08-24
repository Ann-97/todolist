//import mongoose
const mongoose=require('mongoose')
const Schema=mongoose.Schema



//create model 
const todoSchema=new Schema({
    todo:{
   type:String,
   required: true
   }
    })
 const todo=mongoose.model("todo",todoSchema)   

    //export event
module.exports={
    todo
}