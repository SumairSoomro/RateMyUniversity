const express = require("express");
const router = express.Router();

const { getUniversities, getUniveritybyID } = require("../controllers/universityController");

// Route to get all university names
router.get("/", getUniversities);
router.get("/:id", getUniveritybyID);

module.exports = router;
