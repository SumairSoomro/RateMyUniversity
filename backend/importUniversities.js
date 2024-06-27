// backend/importUniversities.js
const fs = require("fs");
const mongoose = require("mongoose");
const csvParser = require("csv-parser");
const dotenv = require("dotenv");
const University = require("./models/universityModel");

// Load environment variables
dotenv.config();

// Connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("MongoDB Connected");
    } catch (error) {
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
};

connectDB();

const results = [];

// Parse the CSV file
// Parse the CSV file
fs.createReadStream("universities.csv")
    .pipe(csvParser())
    .on("data", (data) => {
        console.log(data); // Log parsed data to debug
        if (data.institution) {
            results.push({ name: data.institution });
        }
    })
    .on("end", async () => {
        try {
            await University.insertMany(results);
            console.log("Universities imported successfully");
            process.exit();
        } catch (error) {
            console.error("Error importing universities", error);
            process.exit(1);
        }
    });
