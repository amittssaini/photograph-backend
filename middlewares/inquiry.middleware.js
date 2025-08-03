
const inquiryAuthorized=(req,res,next)=>{
    if(req.user.role!=="client") { return res.status(403).json({message:"role should be client"});
}
  console.log(req.user);
    next();
}
module.exports = inquiryAuthorized;