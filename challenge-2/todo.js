const express = require("express");
const app = express();
app.use(express.json());

let todos = [];

// CREATE
app.post("/todos", (req, res) => {
  const { task } = req.body;
  const todo = { task, done: false };
  todos.push(todo);
  res.send(`Added task: ${task}`);
});

// READ (all)
app.get("/todos", (req, res) => {
  res.json(todos);
});

// READ (completed)
app.get("/todos/completed", (req, res) => {
  const completed = todos.filter(t => t.done);
  res.json(completed);
});

// UPDATE (mark done)
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  if (!todos[id]) return res.status(404).send("Task not found");

  todos[id].done = true;
  res.send(`Marked task ${id} as done`);
});

// DELETE
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  if (!todos[id]) return res.status(404).send("Task not found");

  const removed = todos.splice(id, 1);
  res.send(`Removed: ${removed[0].task}`);
});

app.listen(3000, () => console.log("Connected"));
