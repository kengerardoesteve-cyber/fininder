const Category = require("../models/category");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: "Erreur récupération catégories", error: error.message });
  }
};

module.exports = { getCategories };