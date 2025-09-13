const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Connected");
});

app.get("/divide", (req, res) => {
    try {
        const a = parseFloat(req.query.a);
        const b = parseFloat(req.query.b);
        if (b === 0) throw new Error("Cannot divide by zero");

        res.send(`Result: ${a / b}`);
    } catch (err) {
        next(err);
    }
});

app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).send(`Error: ${err.message}`);
});