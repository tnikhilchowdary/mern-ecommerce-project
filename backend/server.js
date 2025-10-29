import express from "express";
import connectDb from "./db/connectDb.js";
import userRoutes from "./routes/userRoutes.js";


const app = express();
app.use(express.json());
const PORT = 5001;
connectDb();
app.get("/", (req, res) => {
    res.send("Backend is running");
})
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
    console.log("Server is running");
})
