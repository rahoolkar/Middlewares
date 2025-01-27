const express = require("express");
const app = express();

//defining middlewares
//middlewares are the function that are excecuted after request is recieved or before response is sent


//if we want our middleware to run in any request case
//middleware function takes 2 arguemnts request,response

//uses of middleware - 
//1. excute a peice of code
//2. make changes to the req and res obejcts
//3. end the req and res cycle
//4. call the nect function in the stack

app.use(function middlewares(req,res){
    console.log("i am middleware running");
    //sending the response before request gets to the server
    res.send("mai middleware hoon, mujhse bachkar rahio")
})

app.get("/",(req,res)=>{
    res.send("hi you have landed on the root page");
})

app.get("/random",(req,res)=>{
    res.send("hi, you have landed on the random page");
})

app.listen(8080,(req,res)=>{
    console.log("server is listening on port 8080");
})