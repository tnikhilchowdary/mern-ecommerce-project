import express from "express";
import connectDb from "./db/connectDb.js";

const app = express();
app.use(express.json());
const PORT = 5001;
connectDb();
app.get("/", (req, res) => {
    res.send("Backend is running");
})

app.listen(PORT, () => {
    console.log("Server is running");
})
