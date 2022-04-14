const express=require("express");
const router=express.Router();
const passport = require("passport");

const usersController=require("../controllers/users_controller.js");

router.get("/profile",passport.checkAuthentication,usersController.profile);
router.get("/post",usersController.post);
router.get("/SignUp",usersController.SignUp);
router.post("/create",usersController.create);
router.get("/SignIn",usersController.SignIn);
router.get("/SignOut",usersController.destroySession);

// use  passport as a middle ware
router.post("/create-session",passport.authenticate(
    "local",
    {failureRedirect:"/users/SignIn"}
),usersController.createSession);



module.exports=router;