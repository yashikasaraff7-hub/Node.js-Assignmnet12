const express = require("express");
const jwt = require("jsonwebtoken");
const authMiddleware = require("./middleware/authMiddleware");
require("dotenv").config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    const token = jwt.sign(
        { email: email },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.json({
        message: "Login successful",
        token: token
    });
});

app.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Protected profile accessed successfully",
        user: req.user
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
