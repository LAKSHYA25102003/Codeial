const express=require("express");
const router=express.Router();

const usersController=require("../controllers/users_controller.js");

router.get("/profile",usersController.profile);
router.get("/post",usersController.post);
router.get("/SignUp",usersController.SignUp);
router.post("/create",usersController.create);
router.get("/SignIn",usersController.SignIn);



module.exports=router;