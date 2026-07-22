const jwt = require("jsonwebtoken");



const verifyToken = (req, res, next) => {
  try {
    // Get token from cookies
    const token = req.headers.authorization?.split(" ")[1];
    console.log("token inside the users middleware",token)
    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Please login first.",
      });
    }
    
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store user information in request object
    req.user = {
      id: decoded.id,
      role:decoded.role
    };
    
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

module.exports = verifyToken


