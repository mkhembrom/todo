const express = require('express');
const connection = require('../utils/db');
const dotenv = require('dotenv');
const app = express();
const noteRoute = require('./routes/noteRoutes');
dotenv.config();

const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/note", noteRoute);

app.listen(port, async () => {
    
    console.log(`server is running at PORT: http://localhost:${port}`);
    await connection();
});