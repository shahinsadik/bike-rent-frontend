/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { Label } from '@radix-ui/react-label';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

type TUserInput = {
  email: string;
  password: string;
};

// Define the expected error response type
type ErrorResponse = {
  message: string;
};

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TUserInput>();

  //* login api
  const [login, { isLoading, error }] = useLoginMutation();

  //* Form submission
  const handleSignIn: SubmitHandler<TUserInput> = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const logInData = await login(userInfo).unwrap();
      dispatch(setUser(logInData));
      toast.success('Log In Successful');
      navigate('/dashboard/profile');
    } catch (err) {
      toast.error('Log In Failed');
    }
    reset();
  };

  //* show and hide password functionality
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='my-16'>
      <div className='font-[Oswald] flex lg:items-center justify-center'>
        <Card>
          <CardContent className='lg:w-[500px] w-[85vw] py-10'>
            <div className='mb-3'>
              <h2 className='text-3xl font-semibold text-orange-600'>
                Sign In
              </h2>
              <p className='text-second'>
                Fill out the form below to login to your account.
              </p>
            </div>

            <form onSubmit={handleSubmit(handleSignIn)}>
              <div className='space-y-2'>
                <div className='space-y-2'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    placeholder='Enter your email'
                    type='email'
                    {...register('email', {
                      required: 'Email is required.',
                    })}
                  />
                  {errors.email && (
                    <p className='text-sm mt-2 text-red-500'>
                      {errors.email?.message}
                    </p>
                  )}
                </div>

                <div className='space-y-2 relative'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    id='password'
                    placeholder='Password'
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', {
                      required: 'Password is required.',
                    })}
                  />

                  <button
                    type='button'
                    onClick={togglePasswordVisibility}
                    className='absolute right-2 top-9 text-gray-500 hover:text-gray-800'
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>

                  {errors.password && (
                    <p className='text-sm mt-2 text-red-500'>
                      {errors.password?.message}
                    </p>
                  )}
                </div>
                {error && (
                  <p className='text-red-600'>
                    {
                      (error as FetchBaseQueryError & { data: ErrorResponse })
                        .data.message
                    }
                  </p>
                )}
              </div>

              <div className='mt-3'>
                {isLoading ? (
                  <Button
                    type='submit'
                    variant={'orangeBtn'}
                    className='w-full'
                    disabled
                  >
                    Sign In
                  </Button>
                ) : (
                  <Button
                    type='submit'
                    variant={'orangeBtn'}
                    className='w-full'
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </form>
            <p className='text-center py-3'>
              Don't have an account?
              <Link to='/signUp' className='text-orange-600 font-bold'>
                {' '}
                Sign Up
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;
