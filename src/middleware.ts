import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';

// Add paths that don't require authentication
const publicPaths = ['/login', '/register', '/forgot-password'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  return NextResponse.next();

  // Allow public paths
  if (publicPaths.includes(pathname)) {
    return NextResponse.next();
  }

  // Check if user is authenticated
  if (!token) {
    const url = new URL('/login', request.url);
    url.searchParams.set('from', pathname);
    return NextResponse.redirect(url);
  }

  // try {
  //   // Verify token
  //   verify(token, process.env.JWT_SECRET || 'your-secret-key');
  //   return NextResponse.next();
  // } catch (error) {
  //   // Token is invalid or expired
  //   const url = new URL('/login', request.url);
  //   url.searchParams.set('from', pathname);
  //   return NextResponse.redirect(url);
  // }
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}; 