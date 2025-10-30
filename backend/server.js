import express from "express";
import connectDb from "./db/connectDb.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

connectDb();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
