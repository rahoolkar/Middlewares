const express = require("express");
const app = express();

//error causing api
app.use("/error",(req,res)=>{
    console.tullu("hello-world");
})

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

app.listen(8080,()=>{
    console.log("app is running on port 8080");
})