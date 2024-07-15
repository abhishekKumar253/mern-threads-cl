import express from "express";
import { config } from "./db/config.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(
  cors({
    origin: config.cors,
    credentials: true,
  })
);

app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

export { app };
