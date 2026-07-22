const jwt = require("jsonwebtoken")
const adminMiddleware = (req,res,next)=>{
    // Get token from cookies
        const token = req.headers.authorization?.split(" ")[1];
        console.log("token inside the admin middleware ",token)
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
        
    if(req.user.role!=="admin"){

        return res.status(403).json({
            success:false,
            message:"Admin access only."
        });

    }

    next();

}

module.exports=adminMiddleware;