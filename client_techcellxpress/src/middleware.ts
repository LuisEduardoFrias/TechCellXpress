//
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const jwt = request.cookies.get('access_token');

  if (jwt === undefined) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
  
  try {
    const { payload } = await jwtVerify(JSON.parse(jwt.value), new TextEncoder().encode(process.env.SECRET_JWT_KEY))
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/', '/admin/:path*', '/products', '/product/:path'],
}