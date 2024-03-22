import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

// config dotenv

dotenv.config();

// database config

connectDB();

// rest obj

const app = express();

// middlewares

app.use(express.json());
app.use(morgan("dev"));

// routes

app.use("/api/v1/auth", authRoutes);

// rest api

app.get("/", (req, res) => {
  res.send("<h1>Welcome to E-Commerence Website</h1>");
});

// port

const PORT = process.env.PORT || 8080;

// run or listen

app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
