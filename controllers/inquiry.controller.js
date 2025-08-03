
const InquiryService = require("../services/inquiry.service");
const { message } = require("../validations/auth.validate");
const InquiryServiceInstance = new InquiryService();
const postInquiry=async(req,res)=>{
    try {
      console.log(req.headers.authorization);
       const resp = await InquiryServiceInstance.createInquiry({...req.body,userId:req.user._id})
       if(!resp) res.status(500).json({sucess:false,message:"something wrong"})
       res.status(201).json({"sucess":true,message:"inquiry created",partners:resp}) 
    } catch (error) {
        res.status(500).json({"sucess":false,message:"inquiry  not created"}) 
    }
}
module.exports = postInquiry