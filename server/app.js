const express = require('express');
const app = express();
const questionRoutes = require("./routes/Routes")

const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


app.use(express.json());
app.use(cors());
app.use('/api', questionRoutes);





async function start() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Successfully connected to MongoDB');

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (e) {
        console.error('Error starting server:', e.message);
        process.exit(1);
    }
}

start();
