const express = require("express");
const cors = require("cors");
const complaintRoutes = require("./routes/complaintroutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/complaints", complaintRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Backend is working!"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});