module.exports={
    home:function(req,res){
        // cookies demonstration
        // console.log(req.cookies);
        // res.cookie("user_id",25);
        return res.render("home",{
            title:"Codeial"
        });
    }
}