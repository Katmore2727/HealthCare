const express = require("express");
const app = express();
require('dotenv').config();
const db = require("./config/db");
const router = require('./routes/userRoutes');
const cors = require('cors');
const bodyParser = require('body-parser'); 

const corsOptions={
    origin :'http://localhost:3000',
    optionsSuccessStatus :200
};
app.use(cors(corsOptions)) ;

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/user', router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});