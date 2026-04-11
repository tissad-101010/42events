import express from "express";

const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express + TypeScript (nodenext)" });
});

// Example API route
app.get("/api/events", (req, res) => {
  res.json([
    { id: 1, name: "Event A" },
    { id: 2, name: "Event B" }
  ]);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});