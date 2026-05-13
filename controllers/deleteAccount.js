const User = require("../models/User");
const Language = require("../models/Language");

const deleteAccount = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
message: "This email does not exist or account is already deleted",
      });
    }

    // Delete related data
    await Language.deleteMany({ userId: user._id });

    // Delete user
    await User.deleteOne({ _id: user._id });

    res.status(200).json({
      success: true,
      message: "Account and related data deleted successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};



module.exports = deleteAccount;