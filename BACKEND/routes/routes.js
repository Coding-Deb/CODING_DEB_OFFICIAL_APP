const express = require('express')
const router = express.Router();
const user = require('../models/models')
const sign_in_user = require('../models/sign_in_model')

router.post('/login', (req, res) => {
    const UserData = new user({
        name: req.body.name,
        email: req.body.email,
        courses: req.body.courses,
    })

    if (!req.body.name || !req.body.email || !req.body.courses) {
        console.log("please Enter Data");
    }
    else {
        UserData.save()
            .then(data => res.send(data))
            .catch(err => res.send(err))
    }
})

router.post('/sign_in', async (req, res) => {
    const sign_in_Data = new sign_in_user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        cpassword: req.body.cpassword,
        number: req.body.number
    })

    if (!req.body.name || !req.body.email || !req.body.password || !req.body.number) {
        console.log("please Enter Data");
    }
    else {
        if (req.body.number.length > 10 || req.body.number.length < 10) {
            console.log('Number Length Should Be Under 10');
        } else {
            sign_in_Data.save()
                .then(data => res.send(data))
                .catch(err => res.send(err))
        }
    }
})


module.exports = router 