import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
// import cors from 'cors';
import morgan from 'morgan';
import connectDB from './src/config/db.js';
import { notFound, errorHandler } from './src/middlewares/errorMiddleware.js';
import exampleRoutes from './src/routes/exampleRoutes.js';

const __dirname = path.resolve();
dotenv.config({ path: '.env' });

connectDB();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
// app.use(cors());

// Disable http status code 304
// app.use((req, res, next) => {
// 	req.headers['if-none-match'] = 'no-match-for-this';
// 	next();
// });

app.use('/api/MODEL_NAME', exampleRoutes);

if (process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'build')));
	app.use('/*', express.static(path.join(__dirname, 'build/index.html')));
}

app.use(notFound);
app.use(errorHandler);

const { PORT, NODE_ENV } = process.env;

app.listen(PORT, () => {
	console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});
