const mongoose = require("mongoose");

// Define the schema for the University model
const universitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Ensures each university name is unique
    },
});

// Create a model based on the schema
const University = mongoose.model("University", universitySchema);

// Export the model to use in other parts of the application
module.exports = University;

