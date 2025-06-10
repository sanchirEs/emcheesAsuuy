'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Image from 'next/image';
import Link from 'next/link';

// Form validation schema
const registerSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(8, 'Phone number must be at least 8 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  dateOfBirth: z.string().optional(),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER', 'PREFER_NOT_TO_SAY']).optional(),
  address: z.string().optional(),
  city: z.string().optional(),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      router.push('/login?registered=true');
    } catch (error) {
      console.error('Registration error:', error);
      // Handle error (you might want to show a toast notification here)
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-wrapper ">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <Image
                      src="/assets/img/login-banner.png"
                      alt="Registration Banner"
                      width={500}
                      height={400}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Patient Register{' '}
                        <Link href="/doctor-register">Are you a Doctor?</Link>
                      </h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                          {...register('fullName')}
                        />
                        {errors.fullName && (
                          <div className="invalid-feedback">{errors.fullName.message}</div>
                        )}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Email</label>
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
                        <label className="form-label">Phone</label>
                        <input
                          type="tel"
                          className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                          {...register('phone')}
                        />
                        {errors.phone && (
                          <div className="invalid-feedback">{errors.phone.message}</div>
                        )}
                      </div>

                      {/* <div className="mb-3">
                        <label className="form-label">Date of Birth</label>
                        <input
                          type="date"
                          className="form-control"
                          {...register('dateOfBirth')}
                        />
                      </div> */}

                      <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <select className="form-control" {...register('gender')}>
                          <option value="">Select Gender</option>
                          <option value="MALE">Male</option>
                          <option value="FEMALE">Female</option>
                          <option value="OTHER">Other</option>
                          <option value="PREFER_NOT_TO_SAY">Prefer not to say</option>
                        </select>
                      </div>

                      {/* <div className="mb-3">
                        <label className="form-label">Address</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register('address')}
                        />
                      </div> */}

                      {/* <div className="mb-3">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register('city')}
                        />
                      </div> */}

                      <div className="mb-3">
                        <div className="form-group-flex">
                          <label className="form-label">Create Password</label>
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

                      <div className="mb-3">
                        <button
                          className="btn btn-primary-gradient w-100"
                          type="submit"
                          disabled={isLoading}
                        >
                          {isLoading ? 'Signing Up...' : 'Sign Up'}
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
                          Already have account? <Link href="/login">Sign In</Link>
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