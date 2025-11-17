import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import adminRoutes from "./routes/adminroutes.js";

app.use(cors());
dotenv.config({ path: "./local.env" });

console.log("PORT:", process.env.PORT);

app.use(express.json());

// All doctor APIs start with /api/admin
app.use("/api/admin", adminRoutes);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
