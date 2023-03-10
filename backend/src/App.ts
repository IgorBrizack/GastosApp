import express from 'express'
import 'express-async-errors'
import cors from 'cors'
import error from './middleware/error'
import userRouter from './routes/userRoute'
import gastoRouter from './routes/gastoRoute'
const app = express()

app.use(express.json())

app.use(cors())

app.use(userRouter)
app.use(gastoRouter)
app.use(error)

export default app
