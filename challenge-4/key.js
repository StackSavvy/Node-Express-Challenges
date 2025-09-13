const express = require("express");
const app = express();
app.use(express.json());

let users = [];

// SIGNUP
app.post("/signup", (req, res) => {
    const { name, email } = req.body;
    users.push({ name, email });
    res.send(`✅ User ${name} signed up`);
});

// LOGIN (query)
app.get("/login", (req, res) => {
    const { email } = req.query;
    const user = users.find(u => u.email === email);

    if (user) {
        res.send(` Welcome back, ${user.name}!`);
    } else {
        res.status(404).send(" User not found!");
    }
});

// PROFILE (params)
app.get("/profile/:id", (req, res) => {
    const { id } = req.params;
    if (!users[id]) return res.status(404).send("Profile not found");
    res.json(users[id]);
});

app.listen(3000, () => console.log("Connected"));
