const express = require('express')
const router = express.Router();

// @route GET api/auth
// @desc get a user login
// @accesss Private
router.get('/', (req, res) => {
    res.send("get logged in a user")
})

// @route POST api/auth
// @desc auth user and get token
// @accesss Public
router.post('/', (req, res) => {
    res.send(" log in a user")
})

module.exports = router