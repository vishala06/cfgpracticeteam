const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authroutes");
const complaintRoutes = require("./routes/complaintroutes");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);


app.get("/", (req, res) => {
    res.json({
        message: "Backend is working!"
    });
});