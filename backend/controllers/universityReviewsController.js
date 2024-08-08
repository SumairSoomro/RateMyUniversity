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
        userId: req.user.id, // Associate review with user ID
        universityId: req.body.universityId,
        food: req.body.food,
        safety: req.body.safety,
        greekLife: req.body.greekLife,
        clubs: req.body.clubs,
        facilities: req.body.facilities,
        location: req.body.location,
        faculty: req.body.faculty,
        networking: req.body.networking,
        reviewText: req.body.reviewText,
    });

    try {
        const newReview = await review.save();
        res.status(201).json(newReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update an existing review
const updateReview = async (req, res) => {
    try {
        const review = await UniversityReview.findById(req.params.reviewId);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        // Check if the logged-in user is the owner of the review
        if (review.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to update this review" });
        }

        // Update the review with new data
        review.food = req.body.food !== undefined ? req.body.food : review.food;
        review.safety = req.body.safety !== undefined ? req.body.safety : review.safety;
        review.greekLife = req.body.greekLife !== undefined ? req.body.greekLife : review.greekLife;
        review.clubs = req.body.clubs !== undefined ? req.body.clubs : review.clubs;
        review.facilities = req.body.facilities !== undefined ? req.body.facilities : review.facilities;
        review.location = req.body.location !== undefined ? req.body.location : review.location;
        review.faculty = req.body.faculty !== undefined ? req.body.faculty : review.faculty;
        review.networking = req.body.networking !== undefined ? req.body.networking : review.networking;
        review.reviewText = req.body.reviewText !== undefined ? req.body.reviewText : review.reviewText;

        const updatedReview = await review.save();
        res.json(updatedReview);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a review
const deleteReview = async (req, res) => {
    try {
        const review = await UniversityReview.findById(req.params.reviewId);
        if (!review) {
            return res.status(404).json({ message: "Review not found" });
        }

        // Check if the logged-in user is the owner of the review
        if (review.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to delete this review" });
        }

        await UniversityReview.deleteOne({ _id: req.params.reviewId });
        res.json({ message: "Review deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getReviewsByUniversity,
    createReview,
    updateReview,
    deleteReview,
};

