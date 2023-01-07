import express from 'express';
import 'express-async-errors'
import cors from 'cors';
import error from './middleware/error';
import userRouter from './routes/userRoute';
const app = express();

app.use(express.json());


app.use(cors());

app.use(userRouter)
app.use(error)

export default app;