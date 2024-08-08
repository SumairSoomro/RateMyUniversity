const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
    {

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        universityId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "University", // Reference the University model
            required: true,
        },
        food: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        safety: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        greekLife: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        clubs: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        facilities: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        location: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        faculty: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        networking: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },
        reviewText: {
            type: String,
            required: false, // This field is optional
            trim: true,
        },
    },
    { collection: "universityReviews" }
);

const UniversityReview = mongoose.model("UniversityReview", reviewSchema);

module.exports = UniversityReview;
