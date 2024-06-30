const express = require("express");
const router = express.Router();
const {
    getReviewsByUniversity,
    createReview,
} = require("../controllers/universityReviewsController");

// Route to get reviews for a specific university by ID
router.get("/:universityId", getReviewsByUniversity);

// Route to create a new review
router.post("/", createReview);

module.exports = router;
