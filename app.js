const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Route mặc định
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

// Import router
const contactsRouter = require("./app/routes/contact.route");

// Sử dụng router cho đường dẫn /api/contacts
app.use("/api/contacts", contactsRouter);

module.exports = app;
