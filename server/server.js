import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import User from "./models/User.js";


const app = express();
app.use(cors());
app.use(express.json()); // parse JSON

// Connect to MongoDB
mongoose.connect("mongodb+srv://diganta123:diganta123@cluster0.mcho030.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") 
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(" DB Error:", err));

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // hash password
    const newUser = await User.create({ name, email, password: hashedPassword });
    res.json({ msg: "User created", user: newUser });
  } catch (err) {
    res.status(400).json({ msg: "Error", error: err.message });
  }
});

// =================== Forgot Password ===================

// Request password reset
app.post("/forget", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetToken = resetToken;
    user.resetTokenExpiry = Date.now() + 3600000; // 1 hour expiry
    await user.save();

    // Send reset link (here just console.log)
    console.log(`Reset link: http://localhost:3000/reset/${resetToken}`);
    res.json({ msg: "Password reset link sent to email" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// Reset password
app.post("/reset/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });
    if (!user) return res.status(400).json({ msg: "Invalid or expired token" });

    user.password = await bcrypt.hash(password, 10); // hash new password
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.json({ msg: "Password updated successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
