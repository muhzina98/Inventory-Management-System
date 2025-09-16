import express from'express';
 import dotenv from'dotenv';
import inventoryRouter from './routes/inventoryRouter.js'
import { handleerror, logmiddleware } from './middleware/inventoryMiddleware.js';
import { connectDatabase } from './config/connectDatabase.js';
dotenv.config();
connectDatabase()

const  app= express();



app.use(express.json());


app.use('/api',inventoryRouter)
app.use(logmiddleware,handleerror)


app.listen(process.env.PORT,()=>{

    console.log(`server is running on port ${process.env.PORT}`);
    
})