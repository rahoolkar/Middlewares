const express = require("express");
const app = express();

//error throwing path
app.get("/error",(req,res)=>{
    abcd = abcd;
    res.send("abcd is saying hello");
})
//this route will call the default error handling middleware 

//defing our own error handling middleware 
app.use((err,req,res,next)=>{
    console.log("_____ERROR_____");
    //next() calling the next non-error handling middleware
    next(err); //calling the default middleware
})

app.listen(8080,()=>{
    console.log("server is running on port 8080");
})
