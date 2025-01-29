const express = require("express");
const app = express;

//Middlewares the functions that are executed when the request is recieved or before the response is send

//Uses of Middlewares : 
//Middlewares are the piece of code that are can be executed
//Middlewares can access the request and response body and can alter them
//Middlewares can call the nect Middleware can form a chain like this
//Middleware can send the response 

//Defining a Middleware
app.use(function(req,res){
    console.log("hi, i am a middleware") //this will work for every request route
    //Middleware have two choices either it can a send a response from here or it can call another next()
    
})

app.get("/",(req,res)=>{
    res.send("get request recieved")
})

app.listen(8080,()=>{
    console.log("app is running on port 8080");
})