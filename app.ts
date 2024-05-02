import express from "express";
import bodyParser from 'body-parser';
import register from './routes/register';
import auth from './routes/auth';
import verytoken from "./routes/verytoken";
import dotenv from "dotenv";
import authRouter from './routes/auth';

dotenv.config();

const app = express().use(bodyParser.json());
app.use(express.urlencoded({extended: false}));

app.use('/register', register);
app.use('/auth', auth);
app.use('/verytoken', verytoken)

const PORT = 10101;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});