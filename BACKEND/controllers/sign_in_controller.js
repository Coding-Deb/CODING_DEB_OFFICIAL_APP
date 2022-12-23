const models = require('../models/sign_in_model')

const Sign_in_getData = async (req,res)=>{
    try {
        const result = await models.find()
        res.send(result)
    } catch (error) {
        console.log(err);
    }
} 

module.exports = Sign_in_getData