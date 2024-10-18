/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSignUpMutation } from '@/redux/features/auth/authApi';
import toast from 'react-hot-toast';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { TUser } from '@/types/userType';

// Define the expected error response type
type ErrorResponse = {
  message: string;
};

const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TUser>({
    defaultValues: {
      role: 'user',
    },
  });

  //* sign up api
  const [signUp, { isLoading, error }] = useSignUpMutation();

  const handleSignUp: SubmitHandler<TUser> = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      phone: data.phone,
      address: data.address,
      role: 'user',
    };
    try {
      await signUp(userInfo).unwrap();
      toast.success('Sign Up Successful');
      navigate('/signIn');
    } catch (err) {
      toast.error('Sign Up Failed');
    }
    reset();
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='my-16 font-[Oswald]'>
      <div className='flex lg:items-center justify-center'>
        <Card>
          <CardContent className='lg:w-[500px] w-[85vw] py-5'>
            <div className='mb-3'>
              <h2 className='text-3xl font-semibold text-orange-600'>
                Sign Up
              </h2>
              <p className='text-second'>
                Fill out the form below to create an account.
              </p>
            </div>

            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className='space-y-2'>
                <div className='grid grid-cols-1 gap-4'>
                  <div className='space-y-2'>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                      id='name'
                      placeholder='Enter your name'
                      type='text'
                      {...register('name', {
                        required: 'Name is required.',
                      })}
                    />
                    {errors.name && (
                      <p className='text-sm mt-2 text-red-500'>
                        {errors.name?.message}
                      </p>
                    )}
                  </div>
                </div>

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

                <div className='space-y-2'>
                  <Label htmlFor='phone'>Phone</Label>
                  <Input
                    id='phone'
                    placeholder='Enter your phone number'
                    type='tel'
                    {...register('phone', {
                      required: 'Phone number is required.',
                    })}
                  />
                  {errors.phone && (
                    <p className='text-sm mt-2 text-red-500'>
                      {errors.phone?.message}
                    </p>
                  )}
                </div>

                <div className='space-y-2'>
                  <Label htmlFor='address'>Address</Label>
                  <Input
                    id='address'
                    placeholder='Enter your address'
                    {...register('address', {
                      required: 'Address is required.',
                    })}
                  />
                  {errors.address && (
                    <p className='text-sm mt-2 text-red-500'>
                      {errors.address?.message}
                    </p>
                  )}
                </div>
              </div>

              {error && (
                <p className='text-red-600'>
                  {
                    (error as FetchBaseQueryError & { data: ErrorResponse })
                      .data.message
                  }
                </p>
              )}

              <div className='mt-3'>
                {isLoading ? (
                  <Button
                    type='submit'
                    className='w-full'
                    variant={'orangeBtn'}
                    disabled
                  >
                    Sign Up
                  </Button>
                ) : (
                  <Button
                    type='submit'
                    className='w-full'
                    variant={'orangeBtn'}
                  >
                    Sign Up
                  </Button>
                )}
              </div>
            </form>
            <p className='text-center py-3'>
              Already have an account?
              <Link to='/signIn' className='text-orange-600 font-bold'>
                {' '}
                Sign In
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
