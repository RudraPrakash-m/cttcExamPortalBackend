const express = require("express");
const connectDB = require("./config/db/db");
const studentRoutes = require("./routes/UserRoutes/StudentRoutes");
require("dotenv").config();
const cors = require("cors");
const publicRouter = require("./routes/PublicRoute");

const app = express();

app.use(cors());

connectDB();

app.get("/api", (req, res) => {
  res.json({ message: "Hello world" });
});

app.use("/api", studentRoutes);

app.use("/api", publicRouter)

app.listen(process.env.PORT, () => {
  console.log(`server started at port http://localhost:${process.env.PORT}`);
});
