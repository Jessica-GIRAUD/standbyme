import createIntlMiddleware from 'next-intl/middleware';
import { authPages, privatePages } from './i18n/navigation';
import { routing, locales } from './i18n/routing';
import { NextResponse } from 'next/server';
import { auth } from './lib/auth';


const intlMiddleware = createIntlMiddleware(routing);

const testPathnameRegex = (pages, pathName) => {
  return RegExp(
    `^(/(${locales.join('|')}))?(${pages
      .flatMap((p) => (p === '/' ? ['', '/'] : p))
      .join('|')})/?$`,
    'i'
  ).test(pathName);
};

const middleware = (req) => {
  const isPrivatePage = testPathnameRegex(privatePages, req.nextUrl.pathname);
  const isAuthPage = testPathnameRegex(authPages, req.nextUrl.pathname);

  const token = req.cookies.get('token')?.value;

  // Si utilisateur connecté essaie d'aller sur page login/signup
  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.url));
  }

  // Si utilisateur non connecté essaie d'aller sur page privée
  if (isPrivatePage && !token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return intlMiddleware(req);
};



export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};

export default middleware;
