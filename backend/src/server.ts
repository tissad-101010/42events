import express from "express";

import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express" });
});


const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});