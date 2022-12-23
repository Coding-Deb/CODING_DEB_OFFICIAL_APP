const models = require('../models/models')

const getData = async (req,res)=>{
    try {
        const result = await models.find()
        res.send(result)
    } catch (error) {
        console.log(err);
    }
} 

module.exports = getData