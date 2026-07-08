const express = require("express");
const router = express.Router();

const {
  loginUser,
  registerUser,
} = require("../controllers/authController");

router.post("/register", registerUser); // Temporaire pour créer un utilisateur de test
router.post("/login", loginUser);

module.exports = router;