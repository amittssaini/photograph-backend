const InquiryService = require("../services/inquiry.service");
const PartnerService = require('../services/partner.service');
const { message } = require("../validations/auth.validate");
const InquiryServiceInstance = new InquiryService();
const PartnerServiceInstance = new PartnerService();

// this controller is used for fetching the all inquiries 
const getLeads=async(req,res)=>{
    try {
        const resp = await InquiryServiceInstance.fetchAllInquiry();
        if(!resp){
            res.json({message:"no inquiry found"})
        }
        res.status(200).json({"sucess":true,"leads":resp})
    } catch (error) {
        res.status(500).json({"sucess":true,message:"something wrong "})
        
    }
}

// this controller for partner details 
const postPartnerDetails=async(req,res)=>{
    try {
        const {_id} = req.user;
        
        const resp = await PartnerServiceInstance.addDetails({...req.body,partnerId:_id})
        if(!resp) res.status(402).json({sucess:false,message:"partner detials not added"})
        res.status(200).json({sucess:true,message:"partner detials added" ,data:resp})
    } catch (error) {
        res.status(500).json({sucess:false,message:"partner detials not added"})
    }
}

const postPortforlio=async(req,res)=>{
    try {
        const {_id} = req.user;
        const resp = await PartnerServiceInstance.portforlio({...req.body,partnerId:_id});
        if(!resp) res.status(402).json({sucess:false,message:"portfolio detials not added"})
        res.status(200).json({sucess:true,message:"portfolio  added" ,data:resp})
    } catch (error) {
           res.status(500).json({sucess:false,message:"porfolio  not added"})
    }

}
module.exports={getLeads,postPortforlio,postPartnerDetails};