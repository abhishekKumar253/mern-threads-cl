import { config as conf } from "dotenv";
conf();

const _congif = {
  port: process.env.PORT || 5000,
  databaseUrl: process.env.MONGODB_URI,
  cors: process.env.CORS_ORIGIN,
  jwtSecret: process.env.JWT_SECRET,
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  apiKey: process.env.CLOUDINARY_API_KEY,
  apiSecret: process.env.CLOUDINARY_API_SECRET,
  node_env: process.env.NODE_ENV,
};

export const config = Object.freeze(_congif);
