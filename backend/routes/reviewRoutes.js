const express = require("express");
const router = express.Router();
const {
    getReviewsByUniversity,
    createReview,
    updateReview,
    deleteReview,
} = require("../controllers/universityReviewsController");

// Route to get reviews for a specific university by ID
router.get("/:universityId", getReviewsByUniversity);

// Route to create a new review
router.post("/", createReview);

router.put("/:reviewId", updateReview);

router.delete("/:reviewId", deleteReview); // Add this line

module.exports = router;
