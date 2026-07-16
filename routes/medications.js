const express = require("express")
const mongoose = require("mongoose")

const router = express.Router();


// create medication 

//read meadication

// update medication

// delete medication

import express from "express";
import Medication from "../models/Medication.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

/*
==================================================
Create Medication
POST /api/medications
==================================================
*/

router.post("/", verifyToken, async (req, res) => {
  try {
    const medication = await Medication.create({
      user: req.user.id, // Logged-in user
      ...req.body,
    });

    res.status(201).json({
      success: true,
      message: "Medication added successfully.",
      medication,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/*
==================================================
Get All Medications of Logged-in User
GET /api/medications
==================================================
*/

router.get("/", verifyToken, async (req, res) => {
  try {
    const medications = await Medication.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: medications.length,
      medications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/*
==================================================
Get Single Medication
GET /api/medications/:id
==================================================
*/

router.get("/:id", verifyToken, async (req, res) => {
  try {
    const medication = await Medication.findOne({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!medication) {
      return res.status(404).json({
        success: false,
        message: "Medication not found.",
      });
    }

    res.status(200).json({
      success: true,
      medication,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/*
==================================================
Update Medication
PUT /api/medications/:id
==================================================
*/

router.put("/:id", verifyToken, async (req, res) => {
  try {
    const medication = await Medication.findOneAndUpdate(
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

    if (!medication) {
      return res.status(404).json({
        success: false,
        message: "Medication not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Medication updated successfully.",
      medication,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/*
==================================================
Delete Medication
DELETE /api/medications/:id
==================================================
*/

router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const medication = await Medication.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!medication) {
      return res.status(404).json({
        success: false,
        message: "Medication not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Medication deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;