const express = require("express");
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Connected");
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

let grocery = [];

app.post("/grocery", (req, res) => {
    const { name, quantity } = req.body;
    const newItem = { name, quantity };
    grocery.push(newItem);
    res.send(`Added: ${name}, Quantity: ${quantity}`);
});


app.get("/grocery", (req, res) => {
    res.json(grocery);
});

app.put("/grocery/:id", (req, res) => {
    const { id } = req.params;
    const { name, quantity } = req.body;

    if (!grocery[id]) {
        return res.status(404).send("❌ Item not found!");
    }

    grocery[id] = { name, quantity };
    res.send(`🔄 Updated item ${id} to: ${name}, Quantity: ${quantity}`);
});

app.delete("/grocery/:id", (req, res) => {
    const { id } = req.params;
    if (!grocery[id]) {
        return res.status(404).send("Item not found")
    }
    const removed = grocery.splice(id, 1);
    res.send(`Removed: ${removed[0].name}`);
});
