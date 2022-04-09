const express=require("express");
const db=require("./config/mongoose");
const User=require("./models/users.js");
const cookieParser=require("cookie-parser");
const app=express();
const port=8000;


// middle ware
app.use(cookieParser());
app.use(express.urlencoded());
app.use('/', require('./routes/index.js'));


// setting view engine and path for view engine
app.set("view engine","ejs");
app.set("views","./views");



app.listen(port,function(err){
    if(err)
    {
        console.log(`Error:${err}`);
        return ;
    }
    console.log(`Server is sarted successfully on the port:${port}`);
});