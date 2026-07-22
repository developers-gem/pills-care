const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const User = require("../models/User");
const verifyToken = require("../middleware/auth.middleware.js");
const adminMiddleware = require("../middleware/admin.middleware.js");


// GET ALL USERS (admin only ideally)

router.get("/users", async (req, res) => {
  try {
    const users = await User.find().select("-password -__v");

    res.json(users);

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

// Signup
router.post("/signup", async (req, res) => {
  try {
    const { name, email,dob, gender, password } = req.body;

    // ✅ check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({success:false, msg: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      dob,
      gender,
      password: hashed
    });

    // ✅ don't send password in response
    // res.json({
    //   _id: user._id,
    //   name: user.name,
    //   email: user.email,
    //    dob: user.dob,
    //   gender: user.gender,
    //   role: user.role
    // });
    res.status(200).json({
      success:true,
      msg:"user created successfully"
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });  

  }
});
// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate Input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // Find User
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Compare Password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );


    // Success Response
    res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        gender: user.gender,
        dob: user.dob,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
});

// profile

router.get("/profile", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);

  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});


// Forgot Password
router.post("/forgot-password", async (req, res) => {
  try {

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        msg: "User not found",
      });
    }

    // Generate reset token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Save token + expiry
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 15 * 60 * 1000;

    await user.save();

    // Reset URL
    const resetUrl = `http://localhost:5000/reset-password/${resetToken}`;

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Password Reset",
      html: `
        <h2>Reset Password</h2>
        <p>Click below link to reset password:</p>
        <a href="${resetUrl}">${resetUrl}</a>
      `,
    });

    res.json({
      msg: "Reset email sent successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      msg: "Server error",
    });
  }
});

// Reset Password
router.post("/reset-password/:token", async (req, res) => {

  try {

    const { token } = req.params;
    const { password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        msg: "Invalid or expired token",
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    // Clear reset fields
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.json({
      msg: "Password reset successful",
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      msg: "Server error",
    });
  }
});

router.delete("/delete",async(req,res)=>{
  try{
    let {email} = req.body;
    // console.log(email);
    const user = await User.findOne({email:email})
    console.log(user)
    if(!user){
      res.status(403).json({success:false,message:"this is not our user"})
    }
    else{
      await User.findByIdAndDelete(user.id)
      res.status(200).json({success:true,message:"user deleted successfully"})
    }
  }catch(err){
      console.log(`some error accured during users deletion ${err}`)
  }
})


// delete route

// POST /api/auth/logout
router.post("/logout", (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Logged out successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});



// admin-login

router.post("/admin/login", async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            success:false,
            message:"Admin not found"
        });
    }

    if(user.role !== "admin"){
        return res.status(403).json({
            success:false,
            message:"Access Denied"
        });
    }

    // const isMatch = await bcrypt.compare(password,user.password);

    // if(!isMatch){
    //     return res.status(401).json({
    //         success:false,
    //         message:"Wrong Password"
    //     });
    // }

    const token = jwt.sign(
        {
            id:user._id,
            role:user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"7d"
        }
    );

    res.status(200).json({
        success:true,
        token,
        user
    });

});


//admin getting all the users details

router.get("/admin/all-users",adminMiddleware, async (req, res) => {
  try {
    const users = await User.find({ role: "user" }).lean();

    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found.",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Users fetched successfully.",
      count: users.length,
      data: users,
    });
  } catch (error) {
    console.error("Error fetching users:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
      // error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});
module.exports = router;