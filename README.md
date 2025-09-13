Node-Express-Challenges

A collection of beginner-friendly Node.js + Express challenges to practice building REST APIs. Each challenge focuses on a different concept like CRUD operations, query/params usage, and error handling.

🚀 Challenges Overview
1. Grocery API

Basic CRUD operations for managing a grocery list.

POST /grocery → Add a new item ({ name, quantity })

GET /grocery → Get all items

PUT /grocery/:id → Update an item by index

DELETE /grocery/:id → Delete an item by index

2. Todo API

A simple Todo list with task management.

POST /todos → Add a new task ({ task })

GET /todos → Get all tasks

GET /todos/completed → Get only completed tasks

PUT /todos/:id → Mark a task as done

DELETE /todos/:id → Remove a task

3. User API (v1)

Simple authentication simulation (contains a bug in /profile for learning purposes).

POST /signup → Create a new user ({ name, email })

GET /login?email=... → Login with email query

GET /profile/:id → Get a profile by index (bug: re.json instead of res.json)

4. User API (v2) ✅ Fixed

Improved version of the signup/login/profile API.

POST /signup → Register user

GET /login?email=... → Login user

GET /profile/:id → Get user profile by index

5. Division API with Error Handling

Demonstrates error handling in Express.

GET /divide?a=10&b=2 → Returns result of division

Handles division by zero and unexpected errors with a global error middleware.

📦 Installation & Setup

Clone the repo and install dependencies:

git clone https://github.com/StackSavvy/Node-Express-Challenges.git
cd Node-Express-Challenges
npm install


Run a challenge:

node challenge1.js   # or the respective filename


Each challenge runs on port 3000 by default.

🛠️ Tech Stack

Node.js

Express.js

📚 Learning Goals

By completing these challenges, you’ll practice:

Creating Express servers

Handling routes with GET, POST, PUT, DELETE

Using query params and route params

Error handling in APIs

Basic user management logic

🤝 Contributing

Want to add more challenges?

Fork this repo

Create a new branch (git checkout -b new-challenge)

Add your challenge (e.g., challenge6.js)

Submit a pull request 🚀

📄 License

Open-source — feel free to use and extend.
