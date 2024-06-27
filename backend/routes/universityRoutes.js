const express = require("express");
const router = express.Router();

// Example route
router.get("/", (req, res) => {
    res.send("Hello from universityRoutes");
});

module.exports = router;

// backend/routes/universityRoutes.js

const router2 = express.Router();
const { getUniversities } = require('../controllers/universityController');

// Route to get all university names
router2.get('/', getUniversities);

module.exports = router2;
