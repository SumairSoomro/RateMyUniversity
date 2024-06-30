const UniversityReview = require("../models/universityReviewsModel");
const University = require("../models/universityModel");

// Get reviews for a specific university
const getReviewsByUniversity = async (req, res) => {
    try {
        const reviews = await UniversityReview.find({
            universityId: req.params.universityId,
        });
        res.json(reviews);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new review for a university
const createReview = async (req, res) => {
    const university = await University.findById(req.body.universityId);
    if (!university) {
        return res.status(400).json({ message: "University not found" });
    }

    const review = new UniversityReview({
        universityId: req.body.universityId,
        food: req.body.food,
        safety: req.body.safety,
        greekLife: req.body.greekLife,
        clubs: req.body.clubs,
        facilities: req.body.facilities,
        location: req.body.location,
        faculty: req.body.faculty,
        networking: req.body.networking,
    });

    try {
        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
module.exports = {
    getReviewsByUniversity,
    createReview,
};
