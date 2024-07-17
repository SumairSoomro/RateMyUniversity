const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token =
        req.headers.authorization && req.headers.authorization.split(" ")[1]; // Get token from header

    if (!token) {
        return res
            .status(401)
            .json({ message: "No token, authorization denied" }); // If no token, return error
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token with your secret
        console.log("Decoded token:", decoded); // Log decoded token for debugging
        req.user = decoded; // Set user data in request (ensure your token contains the user data as expected)
        next(); // Proceed to next middleware or route handler
    } catch (error) {
        console.error("Token verification error:", error); // Log error for debugging
        res.status(401).json({ message: "Token is not valid" }); // If token is invalid, return error
    }
};

module.exports = { authMiddleware };
