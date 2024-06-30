const mongoose = require("mongoose");
const UniversityReviews = require("./models/universityReviewsModel.js"); // Replace with the correct path to your model file

mongoose
    .connect("mongodb://localhost:27017/universityNames", {})
    .then(() => {
        console.log("Connected to MongoDB");

        // Create an empty document to ensure the collection is created
        const dummyUniversity = new UniversityReviews({
            universityId: "667dc8d9146cff7808ab5b07",
            food: 0,
            safety: 0,
            greekLife: 0,
            clubs: 0,
            facilities: 0,
            location: 0,
            faculty: 0,
            networking: 0,
        });

        dummyUniversity
            .save()
            .then(() => {
                console.log("Dummy document saved to create the collection");
                mongoose.connection.close();
            })
            .catch((err) => {
                console.error("Error saving dummy document", err);
                mongoose.connection.close();
            });
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB", err);
    });
