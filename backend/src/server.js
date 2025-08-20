import dotenv from 'dotenv'
import express from 'express'
import {connectDB} from './config/prisma.js'
import cors from "cors"
import errorHandler from './middlewares/erroeHandler.js'
dotenv.config();


const app = express();

const  originsPort  = process.env.CLIENT_URL;

const corsOptions = {
    origin:originsPort,
    methods:['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
} 

app.use(cors(corsOptions));
app.use(express.json());

connectDB();

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`));




