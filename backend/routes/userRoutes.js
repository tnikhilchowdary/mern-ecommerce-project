import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import user from "../models/user.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const existingUser = await user.findOne({email});
        if(existingUser) return res.status(400).json({message:"User Already Exists"});

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new user({
            name,
            email,
            password:hashedPassword,
        });

        await newUser.save();

        res.status(201).json({message:"User Created Successfully"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
})


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await user.findOne({ email });  
    if (!foundUser)
      return res.status(400).json({ message: "User Not Found" });

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ id: foundUser._id }, "mysecretkey", {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login Successfully", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;