const express = require("express"); // allows you to create a web server in Node.js.
const app = express();
const userRoutes = require("./routes/users");
const taskRoutes = require("./routes/tasks");
const db = require("./db");

// Middleware
app.use(express.json()); //parse incoming requests with JSON payloads

// Enable CORS

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

db.sync() //don t forget to do this!
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Error synchronizing database:", err);
  });

// Routes
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
