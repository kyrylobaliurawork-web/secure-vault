import express, { Request, Response } from 'express';
import prisma from "./config/prisma.js";

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Secure Vault API',
  });
});

export default app;