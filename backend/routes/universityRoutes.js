const express = require("express");
const router = express.Router();

const { getUniversities } = require("../controllers/universityController");

// Route to get all university names
router.get("/", getUniversities);

module.exports = router;
