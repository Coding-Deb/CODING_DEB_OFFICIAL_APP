const express = require('express')
const getData = require('../controllers/controller')
const Sign_in_getData = require('../controllers/sign_in_controller')

const router = express.Router();

router.get('/apidata',getData)
router.get('/api_sign_in_data',Sign_in_getData)

module.exports = router 