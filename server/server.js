import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";

dotenv.config();

const app = express(); // ✅ MUST BE FIRST

/* CORS */
// app.use(
//   cors({
//     origin: "http://localhost:5174",
//     credentials: true,
//   })
// );

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

/* Middleware */
app.use(express.json());

/* Routes */
app.use("/api/users", userRoutes);

app.use("/api/properties", (req, res, next) => {
  console.log("🔥 PROPERTY ROUTE REQUEST:", req.method, req.url);
  next();
});

app.use("/api/properties", propertyRoutes);

/* Test route */
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

/* DB Connection */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log(err));

/* Server */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});