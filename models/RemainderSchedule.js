const mongoose = require("mongoose")
const reminderScheduleSchema = new mongoose.Schema(
  {
    // Medication Reference
    medication: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medication",
      required: true,
    },

    // User Reference (makes dashboard queries faster)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Morning, Afternoon, Night, Custom
    label: {
      type: String,
      enum: ["Morning", "Afternoon", "Evening", "Night", "Custom"],
      required: true,
    },

    // 08:00, 14:00, 21:00
    reminderTime: {
      type: String,
      required: true,
    },

    // Example: Monday, Tuesday...
    daysOfWeek: [
      {
        type: String,
        enum: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
    ],

    // Used only when frequency is "Every X Hours"
    intervalHours: {
      type: Number,
      default: null,
    },

    // Enable / Disable this reminder
    isEnabled: {
      type: Boolean,
      default: true,
    },

    // Optional snooze duration
    snoozeMinutes: {
      type: Number,
      default: 10,
    },
  },
  {
    timestamps: true,
  }
);

const  ReminderSchedule =  mongoose.model(
  "ReminderSchedule",
  reminderScheduleSchema
);

module.exports = ReminderSchedule;