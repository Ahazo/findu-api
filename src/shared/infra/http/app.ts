import express from 'express';
import routes from './routes';

import cors from 'cors';
import { createConnection } from 'typeorm';

const app = express();

createConnection();

app.use(cors());

export default app;