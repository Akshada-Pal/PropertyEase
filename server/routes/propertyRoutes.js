import express from "express";
console.log("✅ PROPERTY ROUTES FILE LOADED");

import {
  addProperty,
  getProperties,
  deleteProperty,
} from "../controllers/propertyController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/* TEST ROUTE - MUST COME FIRST */
router.get("/test", (req, res) => {
  res.send("Property Routes Working");
});

/* ADD PROPERTY */
router.post("/add", authMiddleware, addProperty);

/* GET ALL PROPERTIES */
router.get("/", getProperties);

/* DELETE PROPERTY */
router.delete("/:id", authMiddleware, deleteProperty);

router.get("/delete-test/:id", async (req, res) => {
  try {
    const Property = (await import("../models/Property.js")).default;

    await Property.findByIdAndDelete(req.params.id);

    res.send("Deleted Successfully");
  } catch (error) {
    res.send(error.message);
  }
});

export default router;