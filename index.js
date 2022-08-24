//import express
const { response } = require('express')
const express=require('express')

const mongoose=require('mongoose')

const Todo= require("./model/db")

//server creation
const app=express()

app.set('view engine', 'ejs')
app.use(express.static("views"))

const dburl= "mongodb://localhost:27017/tododb"
mongoose.connect(dburl,{useNewUrlParser: true, useUnifiedTopology:true} )


//resolving REST API 
//GET-to read data
app.get('/',(req,res)=>{
    res.render("index")
})

//POST-to create data
app.post('/',(req,res)=>{
    const todo=new Todo({
        todo:"testing"
    })
    todo.save()
    .then (result=>{
        res.redirect("/")
    })
})

//PUT-to update/modify data
app.put('/',(req,res)=>{
    res.send("PUT REQUEST")
})

//PATCH-to partially update data
app.patch('/',(req,res)=>{
    res.send("PATCH REQUEST")
})


//DELETE-to delete data
app.delete('/',(req,res)=>{
    res.send("DELETE REQUEST")
})


//set port number
app.listen(3000,()=>{
    console.log("Server started at 3000");
})