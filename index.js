const express=require("express");
const app=express();
const port=8000;


// setting view engine and path for view engine
app.set("view engine","ejs");
app.set("views","./views");

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