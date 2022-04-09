const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
});

// with the time stamps true we can track last updated time and accounted created time 

const User=mongoose.model("User",userSchema);

module.exports=User;