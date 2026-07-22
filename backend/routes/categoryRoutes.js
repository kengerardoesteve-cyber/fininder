const express = require("express");
const router = express.Router();
const { getCategories } = require("../controllers/categoryContrler");

router.get("/", getCategories);

module.exports = router;