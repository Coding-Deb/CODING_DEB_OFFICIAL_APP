const models = require('../models/models')
const reg_student_model = require('../models/sign_in_model')
const express = require('express')
const router = express.Router()

router.delete('/delete/:id',
   (req, res, next) => {
      models.findByIdAndDelete(
         req.params.id, (err, data) => {
            if (err) {
               return next(err)
            } else {
               res.json({
                  msg: data
               })
            }
         }
      )
   }
)

router.delete('/reg_student_delete/:id',
   (req, res, next) => {
      reg_student_model.findByIdAndDelete(
         req.params.id, (err, data) => {
            if (err) {
               return next(err)
            } else {
               res.json({
                  msg: data
               })
            }
         }
      )
   }
)



module.exports = router