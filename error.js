const express = require("express");
const app = express();
const myError = require("./errorclass")

//defining wrapAsync function
function wrapAsync(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=>{
            next(err); //calling the next error handling middleware 
        })
    }
}
//wrapSync function used to handle the async errors

//error throwing path
app.get("/error",(req,res)=>{
    throw new myError("custom my error")
})
//this route will call the default error handling middleware 

//admin route 
app.get("/admin",(req,res)=>{
    throw new myError(403,"access is forbidden");
})
//defining an another middleware to print the name of the error
app.use((err,req,res,next)=>{
    console.log(err);
    next(err); //calling the next error handling middleware 
})

//defining our own error handling middleware 
app.use((err,req,res,next)=>{
    let {status=400,messege="default error messege"} = err;
    //next() calling the next non-error handling middleware
    //next(err); //calling the default middleware
    res.status(status).send(messege);
})

app.listen(8080,()=>{
    console.log("server is running on port 8080");
})
