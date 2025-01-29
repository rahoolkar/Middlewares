const express = require("express");
const app = express();

//Middlewares the functions that are executed when the request is recieved or before the response is send

//Uses of Middlewares : 
//Middlewares are the piece of code that are can be executed
//Middlewares can access the request and response body and can alter them
//Middlewares can call the nect Middleware can form a chain like this
//Middleware can send the response 

//Defining a Middleware //middleware-one
app.use(function(req,res,next){
    console.log("Time:",new Date(Date.now()).toDateString()) //this will work for every request route
    console.log("hi, i am first middleware"); //middleware-one
    //Middleware have two choices either it can a send a response from here or it can call another next()
    next(); //next middleware ko run karega 
})

//middleware-two
app.use((req,res,next)=>{
    console.log("Time:", new Date(Date.now()).toDateString());
    console.log("hi, i am middleware-two");
    next(); //route ko call karega

})

//Logger Middleware //middleware-three
app.use(function(req,res,next){
    req.inTime = new Date(Date.now()).toString();
    console.log(req.method,req.inTime,req.path,req.hostname)
    next();
})

app.get("/",(req,res)=>{
    res.send("get request recieved")
})

app.use("/new",function(req,res,next){
    console.log("hi, i am middleware only for /new route");
    next();
})

app.get("/new",(req,res)=>{
    res.send("new route me entry")
})

//middleware for only /api route
const middleware1 = function(req,res,next){
    console.log("first middleeare of the /api route");
    next();
}

const middleware2 = function(req,res,next){
    let{query} = req.query;
    if(query=="jotaro"){
        next();
    }else{
        res.send("nhi milega data, bhaag yaha se");
    }
}

//we can pass the middleware as argument in the app.get function to run the middleware before reaching to the /api get route 
app.get("/api",middleware1,middleware2,function(req,res){
    res.send("api data lelo");
})

//404 //if the above doesnot match with any route then this middleware will run
app.use(function(req,res){
    res.send("error 404 page not found")
})

app.listen(8080,()=>{
    console.log("app is running on port 8080");
})