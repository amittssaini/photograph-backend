const clientAuthorized=(req,res,next)=>{
    if(req.user.role!=="client") { return res.status(403).json({message:"role should be client"});
}
  //console.log(req.user);
    next();
}

const partnerAuthorized=(req,res,next)=>{
    if(req.user.role!=="partner") { return res.status(403).json({message:"role should be parter"});
}
  //console.log(req.user);
    next();
}

const adminAuthorized=(req,res,next)=>{
    if(req.user.role!=="admin") { return res.status(403).json({message:"role should be admin"});
}
  //console.log(req.user);
    next();
}

module.exports = {partnerAuthorized,adminAuthorized,clientAuthorized}