import express from 'express';
import logger from './logger'
import dotenv from 'dotenv'
import router from './routes/router'

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api", router);

const server = app.listen(port, () => {
    logger.info(`server started at http://localhost:${port}`);
});

export default { app, server };
