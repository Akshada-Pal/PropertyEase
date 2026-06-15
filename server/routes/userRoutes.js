import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/* ========================
   REGISTER
======================== */
router.post("/register", async (req, res) => {
  try {
    console.log("REGISTER API HIT");
    console.log("BODY RECEIVED:", req.body);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // ✅ FIX 1: normalize email (VERY IMPORTANT)
    const normalizedEmail = email.toLowerCase().trim();

    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      console.log("USER ALREADY EXISTS:", normalizedEmail);
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email: normalizedEmail, // ✅ FIXED
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    console.log("NEW USER CREATED:", savedUser._id);

    return res.status(201).json({
      message: "User registered successfully 🚀",
      userId: savedUser._id, // helps debugging
    });

  } catch (err) {
    console.log("REGISTER ERROR:", err);
    res.status(500).json({
      message: "Server error during registration",
    });
  }
});

/* ========================
   LOGIN
======================== */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log("LOGIN API HIT");

    // ✅ FIX 2: normalize login email too
    const normalizedEmail = email.toLowerCase().trim();

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      message: "Login successful 🚀",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (err) {
    console.log("LOGIN ERROR:", err);
    res.status(500).json({
      message: "Server error during login",
    });
  }
});

/* ========================
   PROFILE (PROTECTED)
======================== */
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected route accessed 🚀",
    user: req.user,
  });
});

export default router;