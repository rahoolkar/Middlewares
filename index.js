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


//a middlewware can 2 things 1.send a response 2.call next()

//we should always write middlewares in the series in how we want to exceute

//using next()
app.use(function middleware1(req,res,next){
    console.log("i am middleware-one running");
    //sending the response before request gets to the server
    //res.send("mai middleware hoon, mujhse bachkar rahio")

    next(); //this will call middleware2
})

app.use(function middleware2(req,res,next){
    console.log("i am middleware-two running");
    next(); //this will call app.get()
})

//logger middleware
app.use((req,res,next)=>{
    let time = new Date().toString();
    console.log("log -",req.method,req.hostname,req.path,time);
    next();
})

//so the call looks like : middleware1 -> middleware2 -> app.get();

app.get("/",(req,res)=>{
    res.send("hi you have landed on the root page");
})

app.get("/random",(req,res)=>{
    res.send("hi, you have landed on the random page");
})

app.listen(8080,(req,res)=>{
    console.log("server is listening on port 8080");
})