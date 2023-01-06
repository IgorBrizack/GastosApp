import express from 'express';
import 'express-async-errors'
import cors from 'cors';
import error from './middleware/error';
import userRouter from './routes/userRoute';
const app = express();

app.use(express.json());

const options: cors.CorsOptions = {
  origin: process.env.WEB_HOST
};

app.use(cors(options));


app.use('/login', userRouter)
app.use(error)
export default app;