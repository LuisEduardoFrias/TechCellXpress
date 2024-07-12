import jwt from "jsonwebtoken";
import { SECRET_JWT_KEY } from "./config.js";

export default function middlewares(req, res, next) {
  const token = req?.cookies.access_token;
  Reflect.set(req, 'session', { user: null });

  try {
    const data = jwt.verify(token, SECRET_JWT_KEY);
    Reflect.set(req, 'session', { user: data });
  } catch { }

  const { user } = req.session;

  if (!user) {
    res.status(401).json({ message: "Access not Authorized" });
    return;
  }

  next();
}