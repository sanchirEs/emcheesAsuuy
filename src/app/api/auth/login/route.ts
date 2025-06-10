import { NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { sign } from 'jsonwebtoken';

// Validation schema
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  rememberMe: z.boolean().optional(),
  loginWithOtp: z.boolean().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = loginSchema.parse(body);
    
    // Find user by email and include password
    const user = await prisma.user.findUnique({
      where: { email: validatedData.email },
      select: {
        id: true,
        email: true,
        fullName: true,
        password: true,
        isActive: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    if (!user.isActive) {
      return NextResponse.json(
        { error: 'Account is deactivated' },
        { status: 401 }
      );
    }

    // Verify password
    const isValidPassword = await compare(validatedData.password, user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = sign(
      { 
        userId: user.id,
        email: user.email,
        role: 'user'
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: validatedData.rememberMe ? '7d' : '24h' }
    );

    // Set HTTP-only cookie
    const response = NextResponse.json(
      { 
        message: 'Login successful',
        user: {
          id: user.id,
          email: user.email,
          fullName: user.fullName,
        }
      },
      { status: 200 }
    );

    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: validatedData.rememberMe ? 7 * 24 * 60 * 60 : 24 * 60 * 60, // 7 days or 1 day
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid input data', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 