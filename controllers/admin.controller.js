const { response } = require('../app');
const PartnerVerificationModel = require('../models/partner.model');
const AdminService = require('../services/admin.service');
const { message } = require('../validations/auth.validate');
const AdminServiceInstance = new AdminService();

const getVerification=async(req,res)=>{
    try {
        console.log("in the controller of admin ")
        const resp = await AdminServiceInstance.getAllPendingVerfyPartner();
        res.status(200).json({"pending":resp})
    } catch (error) {
          res.status(500).json({message:"something get wrong"})
    }
}

const putVerifyPartner=async(req,res)=>{
    try {
        const id = req.params.id;
    const resp = await AdminServiceInstance.updatePartnerVerification(id);
    if(!resp) res.status(403).json({sucess:false,message:"not updated"})
    res.status(200).json({sucess:true,message:"updated successfully",response:resp})
    
    } catch (error) {
        res.status(500).json({sucess:false,message:"something wrong "})
    }
}


module.exports={getVerification,putVerifyPartner}