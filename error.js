const express = require("express");
const app = express();
const expressError = require("./errorclass");

//defining our custom middleware
//sabhi errors ke liye middleware define ki hai
app.use((err,req,res,next)=>{
    console.log("middleware-one");
    next(err);
    //middleware can do 2 things 1.next() 2.next(err);
})

app.use((err,req,res,next)=>{
    console.log("middleware-two");
    next(err);
    //calling default express middleware
})

//error causing api
app.use("/error",(req,res)=>{
    console.tullu("hello-world");
})

app.use((req,res,next)=>{
    let {query} = req.query;
    if(query=="teacher"){
        next();
    }else{
        throw new expressError(402,"you are not teacher");
    }
})

app.use((err,req,res,next)=>{
    let {status=500,messege="jaat aagye bhaagoo"} = err ;
    res.status(status).send(messege);
})

app.get("/teacher",(req,res)=>{
    res.send("teacher information")
})
app.listen(8080,()=>{
    console.log("app is running on port 8080");
})