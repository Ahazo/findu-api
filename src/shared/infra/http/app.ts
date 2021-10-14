import cors from 'cors';
import express from 'express';
import { createConnection } from 'typeorm';

import routes from './routes';
import '../../container';

const app = express();

createConnection();
app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
