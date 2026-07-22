const Service = require("../models/service");

const getServices = async (req, res) => {
  try {
    const services = await Service.find().populate("category").populate("user");
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Erreur récupération services", error: error.message });
  }
};

const getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id).populate("category").populate("user");
    if (!service) {
      return res.status(404).json({ message: "Service non trouvé" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: "Erreur récupération service", error: error.message });
  }
};

module.exports = { getServices, getServiceById };