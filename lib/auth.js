// lib/auth.js
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.AUTH_SECRET;

export function getSession(token) {
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded; // { id, email, role, iat, exp }
  } catch (err) {
    console.error('Invalid JWT:', err.message);
    return null;
  }
}
