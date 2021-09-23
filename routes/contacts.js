const express = require("express");
const router = express.Router();

// @route POST api/contacts
// @desc get all user contacts
// @accesss Public
router.get("/", (req, res) => {
  res.send("get all contacts");
});

// @route POST api/contacts
// @desc add new contact
// @accesss Private
router.post("/", (req, res) => {
  res.send("add contact");
});

// @route PUT api/contacts/:id
// @desc update contacts
// @accesss Private
router.put("/:id", (req, res) => {
  res.send("update contacts");
});

// @route DELETE api/contacts/:id
// @desc get all user contacts
// @accesss Private
router.delete("/:id", (req, res) => {
  res.send("delete contacts");
});
module.exports = router;
