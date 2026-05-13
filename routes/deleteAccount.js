const express = require("express");
const router = express.Router();

const deleteAccount = require("../controllers/deleteAccount");

router.post("/", deleteAccount);

module.exports = router;