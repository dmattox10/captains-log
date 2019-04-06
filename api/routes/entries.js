const express = require('express')
const router = express.Router()
const passport = require('passport')
const { body } = require('express-validator/check')
const mongoose = require('mongoose')
const Entry = require('../models/entry')


router.post('/enter', passport.authenticate('jwt', { session: false }), [
    body('entry').isLength({ min: 3 }).trim().escape(),
    body('stardate').isNumeric().trim().escape()
  ],
  (req, res, next)  => {
    console.log(req.body.entry)
    console.log(req.body.stardate)
    let id = mongoose.Types.ObjectId()
    let entry = new Entry(
        {
            _id: id,
            entry: req.body.entry,
            stardate: req.body.stardate
        }
    )
    entry.save((err) => {
        if (err) { return next(err) }
        res.redirect('/')
    })
    
})


module.exports = router