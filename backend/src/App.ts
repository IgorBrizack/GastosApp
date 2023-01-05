import express from 'express';
import 'express-async-errors'

import cors from 'cors';
const app = express();

app.use(express.json());

const options: cors.CorsOptions = {
  origin: process.env.WEB_HOST
};

app.use(cors(options));

export default app;