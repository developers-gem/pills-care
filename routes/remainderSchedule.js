
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth.middleware")
const ReminderSchedule = require("../models/RemainderSchedule")

// create Remainder 

router.get("/", verifyToken, async (req, res) => {
  try {
    const reminders = await ReminderSchedule.find({
      user: req.user.id,
    })
      .populate("medication")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reminders.length,
      reminders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// Get ALl  Remainder

router.get("/:id", verifyToken, async (req, res) => {
  try {
    const reminder = await ReminderSchedule.findOne({
      _id: req.params.id,
      user: req.user.id,
    }).populate("medication");

    if (!reminder) {
      return res.status(404).json({
        success: false,
        message: "Reminder not found.",
      });
    }

    res.status(200).json({
      success: true,
      reminder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// get single Remainder
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const reminder = await ReminderSchedule.findOne({
      _id: req.params.id,
      user: req.user.id,
    }).populate("medication");

    if (!reminder) {
      return res.status(404).json({
        success: false,
        message: "Reminder not found.",
      });
    }

    res.status(200).json({
      success: true,
      reminder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// get all remainder of One medication

router.get("/medication/:medicationId", verifyToken, async (req, res) => {
  try {
    const reminders = await ReminderSchedule.find({
      medication: req.params.medicationId,
      user: req.user.id,
    }).sort({ reminderTime: 1 });

    res.status(200).json({
      success: true,
      reminders,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});



// update remainder 
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const reminder = await ReminderSchedule.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.user.id,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!reminder) {
      return res.status(404).json({
        success: false,
        message: "Reminder not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Reminder updated successfully.",
      reminder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// delete Reminder


router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const reminder = await ReminderSchedule.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!reminder) {
      return res.status(404).json({
        success: false,
        message: "Reminder not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Reminder deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


// toggle Reminder 
router.patch("/:id/toggle", verifyToken, async (req, res) => {
  try {
    const reminder = await ReminderSchedule.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!reminder) {
      return res.status(404).json({
        success: false,
        message: "Reminder not found.",
      });
    }

    reminder.isEnabled = !reminder.isEnabled;

    await reminder.save();

    res.status(200).json({
      success: true,
      message: `Reminder ${
        reminder.isEnabled ? "enabled" : "disabled"
      } successfully.`,
      reminder,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


module.exports = router