import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  response.cookies.set('token', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0), // Supprime le cookie
  });

  return response;
}
