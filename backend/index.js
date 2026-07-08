const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

// Connexion à MongoDB
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.send("API backend en ligne");
});

// Routes
app.use("/api/auth", require("./routes/authRoutes"));

// Port
const PORT = process.env.PORT || 5001;

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});