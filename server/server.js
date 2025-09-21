import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";
import User from "./models/User.js";


const app = express();
app.use(cors());
app.use(express.json()); // parse JSON

// Connect to MongoDB
mongoose.connect("mongodb+srv://diganta123:<db_password>@cluster0.mcho030.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0") 
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

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
