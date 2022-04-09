const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/codeial_users_list");
const db=mongoose.connection;
db.on("error",console.error.bind("Connection error"));
db.once('open',function(){
    console.log("Connection is made with DB very successfully");
});
