import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export const app = express();
import routerName from './Routes/routes.js';

app.use(cors('*'));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.use('/', routerName);
