import express from "express";

const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express + TypeScript (nodenext)" });
});



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});