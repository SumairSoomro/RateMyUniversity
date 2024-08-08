const fs = require("fs");
const mongoose = require("mongoose");
const csvParser = require("csv-parser");
const dotenv = require("dotenv");
const University = require("./models/universityModel");
const { connectDB } = require("./config/db");
// Load environment variables

dotenv.config();

connectDB();

const universities = new Set();

// Parse the CSV file
fs.createReadStream("universities.csv")
    .pipe(csvParser())
    .on("data", (data) => {
        // console.log(data); // Log parsed data to debug
        if (data.institution) {
            universities.add(data.institution);
        }
    })
    .on("end", async () => {
        const uniqueUniversities = Array.from(universities).map((name) => ({
            name,
        }));

        try {
            await University.insertMany(uniqueUniversities, { ordered: false });
            console.log("Universities imported successfully");
            process.exit();
        } catch (error) {
            if (error.code === 11000) {
                console.error("Duplicate key error", error);
            } else {
                console.error("Error importing universities", error);
            }
            process.exit(1);
        }
    })
    .on("error", (error) => {
        console.error("Error reading CSV file", error);
        process.exit(1);
    });
