const express = require("express");
const app = express();


app.get('/api/get',(req,res) => {
    res.send({message:"hello back to nodejs"})
})



app.listen(5000,() => {
    console.log("listening to 5000");
})
