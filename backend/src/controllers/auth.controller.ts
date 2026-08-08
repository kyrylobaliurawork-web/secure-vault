import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service.js";

export async function register( req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await registerUser(email, password);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      message: (error as Error).message,
    });
  }
}

export async function login( req: Request, res: Response) {
  try {
    const { email, password } = req.body;

    const user = await loginUser(email, password);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      message: (error as Error).message,
    });
  }
}

export function me(req: Request, res: Response) {
  res.json({
    user: (req as any).user,
  });
}