import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

// route object

const router = express.Router();

// routing

// Register || Method POST

router.post("/register", registerController);

// Login || POST

router.post("/login", loginController);

export default router;
