const Review = require("../models/review");
const Service = require("../models/service");
const User = require("../models/User");

const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate("user", "fullName email")
      .populate("service", "title price");

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Erreur récupération des avis", error: error.message });
  }
};

const createReview = async (req, res) => {
  try {
    const { user, service, rating, comment } = req.body;

    if (!user || !service || !rating || !comment) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

    const existingUser = await User.findById(user);
    if (!existingUser) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const existingService = await Service.findById(service);
    if (!existingService) {
      return res.status(404).json({ message: "Service non trouvé" });
    }

    const review = await Review.create({ user, service, rating, comment });

    res.status(201).json({ message: "Avis créé", review });
  } catch (error) {
    res.status(500).json({ message: "Erreur création avis", error: error.message });
  }
};

module.exports = { getReviews, createReview };
