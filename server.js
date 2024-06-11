const express = require("express");
const app = express();
require('dotenv').config();
const db = require("./config/db");

const PORT = process.env.PORT || 5000;
console.log(process.env.MONGO_URL)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});