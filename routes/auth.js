const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// @route GET api/auth
// @desc get a user login
// @accesss Private
router.get("/", (req, res) => {
  res.send("get logged in a user");
});

// @route POST api/auth
// @desc auth user and get token
// @accesss Public
router.post(
  "/",
  [
    check("email", "Please enter a valid email").isEmail(),
    check("password", "Please enter the correct password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "Invalid email" });
      }
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Password" });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };
      jwt.sign(
        payload,
        config.get(
          'jwtSecret',
          {
            expiresIn: 360000
          },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        )
      );
    } catch (err) {
      console.error(err.message)
    }
  }
);

module.exports = router;
