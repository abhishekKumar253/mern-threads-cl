import express from "express";
import { config } from "./db/config.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

const app = express();

app.use(
  cors({
    origin: config.cors,
    credentials: true,
  })
);

// middlewares
app.use(express.json({ limit: "5mb" })); // To parse JSON data in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());

// routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

export { app };
