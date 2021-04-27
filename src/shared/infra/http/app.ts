import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';

import User from '@modules/user/infra/typeorm/entities/User';
import UserAddress from '@modules/user/infra/typeorm/entities/UserAddress';
import Person from '@modules/user/infra/typeorm/entities/Person';

const app = express();

createConnection();

app.use(cors());

export default app;