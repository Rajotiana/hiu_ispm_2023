import { RequestHandler } from "express";

export const getGrades: RequestHandler<void, void, void> = (req, res) => {
  res.end();
};
