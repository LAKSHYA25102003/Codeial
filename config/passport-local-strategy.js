const passport=require("passport");
const LocalStrategy=require("passport-local").Strategy;
const User=require("../models/users.js");

passport.use(new LocalStrategy({
    usernameField:"email",
},
function(email,password,done){
    User.findOne({email:email},function(err,user){
        if(err)
        {
            console.log("error in authentication");
            return done(err);
        }
        if(!user||user.password!=password)
        {
            console.log("user is not found");
            return done(null,false);
        }
        return done(null,user);
    })
}))

// seriouslzing the user means to decide which key is going to be kept in cookies
passport.serializeUser(function(user,done){
    done(null,user.id);
});





// deserioslizing the user from the key in the cookies
passport.deserializeUser(function(id,done)
{
    User.findById(id,function(err,user)
    {
        if(err)
        {
            console.log("error in finding account");
            return done(err); 
        }
        return done(null,user);
    });
});

// check if the user is authenticated
passport.checkAuthentication=function(req,res,next)
{
    // if the user is authenticated
    
    if(req.isAuthenticated())
    {
        return next();
    }

    // if the user is not authenticated

    
    return res.redirect("/users/SignIn");
}

passport.authenticationHandler=function(req,res,next)
{
    if(req.isAuthenticated)
    {
        // user information is stored in req.user from the cookie session so just pass it the in res.locals.users
        res.locals.user=req.user;
        
    }
    next();

}

module.exports=passport;