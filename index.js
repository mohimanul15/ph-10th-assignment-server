import dotenv from 'dotenv'
import express from 'express'

import cors from 'cors'
import Routes from './src/routes/routes.js';
import run from './src/database/database.js';


// const val & declaretion
dotenv.config();
const app = express();
const port = process.env.PORT || 5050


// Middleware
app.use(cors())
app.use(express.json())
app.use(Routes)

// database

run();

// Start the application 

app.listen(port, ()=>{
    console.log('app is running at port: ',port);
})
