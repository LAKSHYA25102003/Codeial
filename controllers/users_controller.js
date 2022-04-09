const { redirect } = require("express/lib/response");
const User=require("../models/users.js");

module.exports={
    profile:function(req,res){
        res.render("profile",{
            title:"profile"
        });
    },
    post:function(req,res){
        res.end("<h1>hii</h1>");
    }
    ,

    //renderin a page to sign up 
    SignUp:function(req,res){
        return res.render("signup",{
            title:"SignUp"
        })
    },

    //submitting the signup details to the data base 
    create:function(req,res){
        // first password is checking 
        if(req.body.password!=req.body.confirm_password)
        {
            // console.log("password is wrong");
            return res.redirect('back');
        }

        User.findOne({email:req.body.email},function(err,user){
            if(err)
            {
                console.log("error in creating user account");
                return res.redirect("back");
            }
            if(!user)
            {
                var new_user={
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                }
                User.create(new_user,function(err,user)
                {
                    if(err)
                    {
                        console.log("error in creating account");
                        return res.redirect("back");
                    }
                    return res.redirect("/users/SignIn");
                })
            }
            else
            {
                res.redirect("back");
            }
        })


    },

    // rendering the sign in page 
    SignIn:function(req,res){
        return res.render("signin",{
            title:"SignIn"
        })
    },

    // after checking the sign in details creating the session if sign credentials are correct
    createSession:function(req,res){
        // To do later
    },

}