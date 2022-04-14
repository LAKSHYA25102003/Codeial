const express=require("express");
const db=require("./config/mongoose");
const User=require("./models/users.js");
const cookieParser=require("cookie-parser");



// use for session cookie
const session = require("express-session");
const passport=require("passport");
const passportLocal = require("./config/passport-local-strategy");
const  MongoStore=require("connect-mongo");


// to store session data permanently 




const app=express();
const port=8000;


// middle ware
app.use(cookieParser());
app.use(express.urlencoded());



// setting view engine and path for view engine
app.set("view engine","ejs");
app.set("views","./views");

// using express session as a middle ware 
app.use(session({
    name:"codeial",
    // to day changes at the time of deployment in production
    secret:"paljhhajkhafj",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:(60*1000*100),
    },
    store:MongoStore.create(
    {
        mongoUrl:"mongodb://localhost/codeial_users_list",
     } )
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticationHandler);

// routes
app.use('/', require('./routes/index.js'));



app.listen(port,function(err){
    if(err)
    {
        console.log(`Error:${err}`);
        return ;
    }
    console.log(`Server is sarted successfully on the port:${port}`);
});