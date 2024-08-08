const express = require("express");
const router = express.Router();
const {
    getReviewsByUniversity,
    createReview,
    updateReview,
    deleteReview,
} = require("../controllers/universityReviewsController");
const { authMiddleware } = require('../middleware/authMiddleware');

// Route to get reviews for a specific university by ID
router.get("/:universityId", getReviewsByUniversity);

// Route to create a new review
router.post("/", authMiddleware, createReview);

router.put("/:reviewId", authMiddleware, updateReview);

router.delete("/:reviewId", authMiddleware, deleteReview); // Add this line

module.exports = router;
