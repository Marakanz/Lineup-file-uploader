const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()

//Connect to MongoDB
const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected at ${conn.connection.host}`);
}
connectDB();

//MiddleWare
app.use(cors());
app.use(express.json());
app.use("/user", require("./routes/upload"));

app.listen(4000, () => console.log("Server is running on port 4000"))