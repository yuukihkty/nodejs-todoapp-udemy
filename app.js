const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
app.use(express.json());
app.use(express.static('./public'));

const PORT = 5000;

app.use("/api/v1/tasks", taskRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();

