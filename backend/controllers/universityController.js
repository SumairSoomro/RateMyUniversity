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

module.exports = { getUniversities };
