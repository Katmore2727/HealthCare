const express = require("express");
const app = express();
require('dotenv').config();
const db = require("./config/db");
const useroutes = require('./routes/userRoutes');
const cors = require('cors');

const corsOptions={
    origin :'http://localhost:3000',
    optionsSuccessStatus :200
};
app.use(cors(corsOptions)) ;

const PORT = process.env.PORT || 5000;

app.use('/api/user', useroutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});