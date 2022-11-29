import express from "express";
import { signin, signup } from "../controllers/auth.js";

const router = express.Router();

// Sign Up
router.post("/signup", signup)

// SIgn In
router.post("/signin", signin)

// router.post("/google", '')

export default router