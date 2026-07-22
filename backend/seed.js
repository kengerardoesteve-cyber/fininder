const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Category = require("./models/category");
const Service = require("./models/service");
const User = require("./models/User");

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connecté à MongoDB pour le seed");

    const testUser = await User.create({
      fullName: "Utilisateur Test",
      email: "test@fininder.com",
      password: "motdepassehashe123",
      phone: "0123456789",
    });

    const plomberie = await Category.create({
      name: "Plomberie",
      description: "Services de réparation et installation de plomberie",
    });

    const electricite = await Category.create({
      name: "Électricité",
      description: "Services d'installation et réparation électrique",
    });

    await Service.create({
      user: testUser._id,
      category: plomberie._id,
      title: "Réparation de fuite d'eau",
      description: "Intervention rapide pour toute fuite d'eau",
      price: 15000,
      address: "Rue des Cocotiers",
      city: "Cotonou",
    });

    await Service.create({
      user: testUser._id,
      category: electricite._id,
      title: "Installation prise électrique",
      description: "Pose et mise aux normes de prises électriques",
      price: 10000,
      address: "Avenue Steinmetz",
      city: "Cotonou",
    });

    console.log("✅ Données de test insérées avec succès !");
    process.exit(0);
  } catch (error) {
    console.error("Erreur lors du seed :", error.message);
    process.exit(1);
  }
};

seedData();