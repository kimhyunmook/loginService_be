import { Response, Request, NextFunction } from "express";
import { setAuthCookies } from "../lib/auth";

export const authCookieMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId } = req.body;
  setAuthCookies(userId);
  // res.removeAuthCookies = () => removeAuthCookies(res);
  next();
};
