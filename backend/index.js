const express = require('express')
const dotenv= require('dotenv')
const cookieParser = require('cookie-parser');

const connectDB=require('./config/db')

const app = express();

const PORT = process.env.PORT;

const startServer = async ()=>{
    
}
app.listen(PORT,()=>{
 console.log(`Server running on port ${PORT}`);
})