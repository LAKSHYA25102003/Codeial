const express=require("express");
const app=express();
const port=8000;


// middle ware
app.use('/', require('./routes/index.js'));


app.listen(port,function(err){
    if(err)
    {
        console.log(`Error:${err}`);
        return ;
    }
    console.log(`Server is sarted successfully on the port:${port}`);
});