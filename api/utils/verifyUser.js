import jwt from "jsonwebtoken";
import { errorHandler } from "./error.js";
// import user from "../models/user.model";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, "Access denied"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, "Token is not valid"));

    req.user = user;
    next();
  });
};
