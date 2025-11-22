const express = require("express");
const connectDB = require("./config/db/db");
const studentRoutes = require("./routes/UserRoutes/StudentRoutes");
require("dotenv").config();
const cors = require("cors");
const publicRouter = require("./routes/PublicRoute");

const app = express();

<<<<<<< HEAD
app.use(express.json());

app.use(express.urlencoded());

// In your main server file, update CORS:
=======
>>>>>>> 0ebfa5b (added)
app.use(
  cors({
    origin: ["http://localhost:5173","https://cttcexam.netlify.app/"], // or your frontend URL
    credentials: true,
<<<<<<< HEAD
  })
=======
})
>>>>>>> 0ebfa5b (added)
);

connectDB();


app.use(express.json());

app.use(express.urlencoded({ extended: true }));



app.get("/api", (req, res) => {
  res.json({ message: "Hello world" });
});

app.use("/api", studentRoutes);

app.use("/api", publicRouter);







app.use((err, req, res, next) => {
  const { statusCode = 500, message = 'Something went wrong' } = err;

  return res
    .status(statusCode)
    .json({ success: false, message });
});



app.listen(process.env.PORT, () => {
  console.log(`server started at port http://localhost:${process.env.PORT}`);
});
