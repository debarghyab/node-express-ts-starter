import express from 'express';
const app = express();

app.use('/', (req, res) => res.send('API hit from ' + req.ip || req.hostname))

export default app;