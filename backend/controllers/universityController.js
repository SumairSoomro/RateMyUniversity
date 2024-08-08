// backend/controllers/universityController.js
const University = require("../models/universityModel");

// Get all university names
const getUniversities = async (req, res) => {
    try {
        const universities = await University.find({}, "name"); // Only select the name field
        res.json(universities);
    } catch (error) {
        res.status(500).json({ message: "Error fetching universities", error });
    }
};
const getUniveritybyID = async (req, res) => {
    try {
        const university = await University.findById(req.params.id, "name");
        if (!university) {
            return res.status(404).json({ message: "University not found" });
        }
        res.json(university);
    } catch (error) {
        res.status(500).json({ message: "Error fetching university", error });
    }
};

module.exports = { getUniversities, getUniveritybyID };
