import { Response } from "express";

export function handleError(res: Response, error: unknown, msg: string) {
  if (error instanceof Error) {
    return res.status(400).json({ error: error.message });
  } else {
    return res.status(500).json({ error: "Internal server error." });
  }
}