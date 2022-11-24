const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
app.use(express.json());
require("dotenv").config();

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
