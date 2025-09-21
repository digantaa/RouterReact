import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

// DB setup
mongoose.connect("mongodb://127.0.0.1:27017/test_forgot");

// User Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  resetToken: String,
  resetTokenExpiry: Date
});

const User = mongoose.model("User", userSchema);

// 📍 Signup
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const hashed = await bcrypt.hash(password, 10);
  await User.create({ email, password: hashed });
  res.json({ msg: "User created" });
});

// 📍 Forgot Password (generate token)
app.post("/forgot", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ msg: "User not found" });

  const token = jwt.sign({ id: user._id }, "secret", { expiresIn: "15m" });
  user.resetToken = token;
  user.resetTokenExpiry = Date.now() + 15 * 60 * 1000;
  await user.save();

  // Normally send email, here just return token
  res.json({ msg: "Reset link generated", link: `http://localhost:3000/reset/${token}` });
});

// 📍 Reset Password
app.post("/reset/:token", async (req, res) => {
  const { token } = req.params;
  const { newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, "secret");
    const user = await User.findById(decoded.id);

    if (!user || user.resetToken !== token || user.resetTokenExpiry < Date.now()) {
      return res.status(400).json({ msg: "Invalid or expired token" });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = null;
    user.resetTokenExpiry = null;
    await user.save();

    res.json({ msg: "Password reset successful" });
  } catch (err) {
    res.status(400).json({ msg: "Invalid or expired token" });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
