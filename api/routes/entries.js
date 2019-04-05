const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const Entry = require('../models/entry')

router.post('/enter', passport.authenticate('jwt', { session: false }), (req, res, next)  => {
    console.log(req.body.entry)
    console.log(req.body.stardate)
    
})


module.exports = router