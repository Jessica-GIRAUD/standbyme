
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { getUserByEmail } from '@/lib/db';

const AUTH_SECRET = process.env.AUTH_SECRET;

export async function POST(req) {
  const { email, password } = await req.json();
  const user = await getUserByEmail(email); // requête vers la BDD

  if (!user) {
    return NextResponse.json({ message: 'Utilisateur non trouvé' }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return NextResponse.json({ message: 'Mot de passe incorrect' }, { status: 401 });
  }

  const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, AUTH_SECRET, {
    expiresIn: '1d'
  });

  const response = NextResponse.json({ success: true });
  response.cookies.set('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24,
    sameSite: 'lax'
  });

  return response;
}
