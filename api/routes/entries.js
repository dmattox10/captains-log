const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const Entry = require('../models/entry');

router.post('/enter', function (req, res, next) {
    console.log("entry")
})

router.get('/entries', function (req, res, next) {

})

module.exports = router