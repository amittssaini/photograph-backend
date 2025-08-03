const inquiryModel = require('../models/inquiry.model');
const userModel = require("../models/user.model")

class Inquiry{
    createInquiry=async(payload)=>{
        console.log(payload);
        try {
            const newInqDoc = new inquiryModel(payload);
            const resp = await newInqDoc.save();
            console.log(resp);
            if(!resp) return 
            const {city} = resp;
            const partners = await this.fetchPartners(city);
            console.log(partners);
            return partners
           
        } catch (error) {
            
        }
    }

    fetchPartners=async(city)=>{
        try {
            let resp = await userModel.find(  { role: 'partner', location: city },'name mobile')
            return resp;
        } catch (error) {
            throw error;
        }
    }
    fetchAllInquiry=async()=>{
        try {
            const resp = await inquiryModel.find({});
            return resp;
        } catch (error) {
            throw error;
        }
    }
}

module.exports= Inquiry;