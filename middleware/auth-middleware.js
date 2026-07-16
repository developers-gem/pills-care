const jwt = require("jsonwebtoken");



const verifyToken = (req, res, next) => {
  try {
    // Get token from cookies
    const token = req.headers.authorization?.split(" ")[1];
    
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

/*
module.exports = (req, res, next) => {
  try {
    // 👇 THIS LINE goes here
    const token = req.headers.authorization?.split(" ")[1];
    
    if (!token) {
      return res.status(401).json({ msg: "No token provided" });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    
    next();
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};
*/