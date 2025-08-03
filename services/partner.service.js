const PartnerVerificationModel = require('../models/partner.model');
const portfolioModel= require('../models/partner.model');
class Partner{

    addDetails=async(payload)=>{
        console.log("payload of partner ", payload);
        
        try {
            const newPartnerDoc= new PartnerVerificationModel(payload);
            const resp= await newPartnerDoc.save();
            console.log("is partner data is save ::",resp);
            return resp;
        } catch (error) {
            console.log("error created ::",error);
            throw error;
        }
    }
    
    portforlio=async(payload)=>{
        try {
            const newPortDoc = new portfolioModel(payload);
            const resp = await newPortDoc.save();
            return resp;
        } catch (error) {
            throw error;
        }
    }
}

module.exports=Partner 