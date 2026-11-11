
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { env } from './config/env';

import { healthRouter } from './modules/health/health.routes';
import { authRouter } from './modules/auth/auth.routes';

import { notFoundHandler } from './middleware/not-found.middleware';
import { errorHandler } from './middleware/error.middleware';

export const app = express();

app.disable('x-powered-by');

app.use(helmet());

app.use(
  cors({
    origin: env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
  })
);

app.use(express.json({ limit: '1mb' }));

app.use(express.urlencoded({ extended: true }));

if (env.NODE_ENV !== 'test') {
  app.use(
    morgan(
      env.NODE_ENV === 'production' ? 'combined' : 'dev'
    )
  );
}

app.get('/', (_req, res) => {
  res.json({
    success: true,
    message: 'Tourist Mobile API',
    docs: `${env.API_PREFIX}/health`
  });
});

// Health endpoint
app.use(`${env.API_PREFIX}/health`, healthRouter);

// Authentication endpoints
app.use(`${env.API_PREFIX}/auth`, authRouter);

// 404 and error handlers
app.use(notFoundHandler);

app.use(errorHandler);
