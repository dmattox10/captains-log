const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const { body } = require('express-validator/check')
const Entry = require('../models/entry')


router.post('/enter', passport.authenticate('jwt', { session: false }), [
    body('entry').isLength({ min: 3 }).trim().escape(),
    body('stardate').isNumeric().trim().escape()
  ],
  (req, res, next)  => {
    console.log(req.body.entry)
    console.log(req.body.stardate)


    
})


module.exports = router