import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import bodyParser from 'body-parser';
import logMiddleware from "./middlewares/logMiddlewares.js"
import authRoutes from './routes/authRoutes.js';
import helmet from 'helmet';
const app = express();
const port = process.env.PORT
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/ping', logMiddleware, (req, res) => {
    res.send('Pong');
});
app.get("/", (req, res) => {
    res.send("Welcome to my app");
});
app.use("/api/auth", logMiddleware, authRoutes);

app.listen(port, async () => {
    await connectDB();
    console.log(`Server is running at port ${port}`);
});