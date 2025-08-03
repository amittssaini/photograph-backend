const PartnerVerificationModel = require('../models/partner.model');
const inquiryModel = require('../models/inquiry.model');
const userModel = require('../models/user.model');

class Admin{
    // fetching all the pendings verified partners 
    getAllPendingVerfyPartner=async()=>{
     try {
          const resp= await PartnerVerificationModel.find({status:"pending"})
          return resp;
     } catch (error) {
         console.error("Error fetching pending verifications:", error);
         throw error;
        
     }
    }
    // admin verify the partners 
    updatePartnerVerification=async(id)=>{
        console.log(id);
        try {
             const updated = await PartnerVerificationModel.findByIdAndUpdate(
      id,
      { status: "verified", adminComment: "Verified by admin" },  // optional adminComment
      { new: true }  // returns updated document
    );
    console.log(updated);
    return updated;
        } catch (error) {
            
        }
    }

    countClients=async()=>{
        try {
            return await userModel.countDocuments({role:'client'})
        } catch (error) {
            throw error;
        }
    }
    countPartners=async()=>{
        try {
            return await userModel.countDocuments({role:'parnter'})
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Admin;