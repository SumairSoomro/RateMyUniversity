const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./config/db");
const session = require("express-session");
const MongoStore = require("connect-mongo");

dotenv.config();

// Connect to the database
connectDB();

const app = express();



// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.get("/", (req, res) => {
    res.send("Hello from Express!");
});

app.use("/api/universities", require("./routes/universityRoutes"));
app.use("/api/reviews", require("./routes/reviewRoutes"));
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
