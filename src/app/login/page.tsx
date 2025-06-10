'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Image from 'next/image';
import Link from 'next/link';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
  loginWithOtp: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: true,
      loginWithOtp: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const result = await response.json();
      
      // Store the token in localStorage or a secure cookie
      localStorage.setItem('token', result.token);
      
      // Redirect to dashboard or home page
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      // Handle error (you might want to show a toast notification here)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-wrapper">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <Image
                      src="/assets/img/login-banner.png"
                      alt="Login Banner"
                      width={500}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>Login <span>Emchees Asuuy</span></h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                          {...register('email')}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">{errors.email.message}</div>
                        )}
                      </div>
                      <div className="mb-3">
                        <div className="form-group-flex">
                          <label className="form-label">Password</label>
                          <Link href="/forgot-password" className="forgot-link">
                            Forgot password?
                          </Link>
                        </div>
                        <div className="pass-group">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            className={`form-control pass-input ${errors.password ? 'is-invalid' : ''}`}
                            {...register('password')}
                          />
                          <span
                            className={`feather-eye${showPassword ? '' : '-off'} toggle-password`}
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        </div>
                        {errors.password && (
                          <div className="invalid-feedback">{errors.password.message}</div>
                        )}
                      </div>
                      <div className="mb-3 form-check-box">
                        <div className="form-group-flex">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="remember"
                              {...register('rememberMe')}
                            />
                            <label className="form-check-label" htmlFor="remember">
                              Remember Me
                            </label>
                          </div>
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="loginWithOtp"
                              {...register('loginWithOtp')}
                            />
                            <label className="form-check-label" htmlFor="loginWithOtp">
                              Login with OTP
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button
                          className="btn btn-primary-gradient w-100"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Signing in...' : 'Sign in'}
                        </button>
                      </div>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="social-login-btn">
                        <button type="button" className="btn w-100">
                          <Image
                            src="/assets/img/icons/google-icon.svg"
                            alt="google-icon"
                            width={20}
                            height={20}
                          />
                          Sign in With Google
                        </button>
                        <button type="button" className="btn w-100">
                          <Image
                            src="/assets/img/icons/facebook-icon.svg"
                            alt="fb-icon"
                            width={20}
                            height={20}
                          />
                          Sign in With Facebook
                        </button>
                      </div>
                      <div className="account-signup">
                        <p>
                          Don't have an account? <Link href="/register">Sign up</Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 