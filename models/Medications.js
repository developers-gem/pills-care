import mongoose from "mongoose";

const medicationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    medicineName: {
      type: String,
      required: true,
      trim: true,
    },

    strength: {
      type: String,
      required: true,
      trim: true,
    },

    medicineType: {
      type: String,
      enum: ["Tablet", "Capsule", "Syrup", "Injection", "Drops"],
      required: true,
    },

    // Example: "1 Tablet", "2 Tablets", "5 ml"
    dosage: {
      type: String,
      required: true,
      trim: true,
    },

    // Example: Before Food, After Food, With Food
    instructions: {
      type: String,
      enum: [
        "Before Food",
        "After Food",
        "With Food",
        "Empty Stomach",
        "Before Sleep",
        "Anytime",
      ],
      default: "After Food",
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
    },

    frequency: {
      type: String,
      enum: [
        "Daily",
        "Weekly",
        "Alternate Day",
        "Every X Hours",
        "Custom",
      ],
      default: "Daily",
    },

    status: {
      type: String,
      enum: ["Active", "Paused", "Completed"],
      default: "Active",
    },

    notes: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Medication", medicationSchema);