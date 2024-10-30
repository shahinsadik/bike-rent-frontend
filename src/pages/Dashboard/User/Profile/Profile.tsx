import Loading from '@/components/CommonComponents/Loading';
import { AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  useGetUserProfileQuery,
  useUpdateProfileMutation,
} from '@/redux/features/users/users.api';
import { TUser } from '@/types/userType';
import { Avatar } from '@radix-ui/react-avatar';
import { FilePenIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { data, isLoading, refetch } = useGetUserProfileQuery(undefined);
  const [updateProfile] = useUpdateProfileMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TUser>();

  const userProfile = data?.data;

  const handleUpdateProfile: SubmitHandler<TUser> = async (profileData) => {
    try {
      await updateProfile(profileData).unwrap();
      toast.success('Profile Updated Successfully');
      reset();
      setIsEditing(false);
    } catch (err) {
      console.log(err);
      toast.error('Failed To Update Profile Info');
    }
  };

  useEffect(() => {
    if (data) {
      refetch();
    }
  }, [data, refetch]);

  const handleCancel = () => {
    reset();
    setIsEditing(false);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Card className='w-full  mx-auto font-[oswald] my-5'>
      <CardHeader className='py-8 px-6 rounded-t-lg'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className='h-16 w-16'>
              <AvatarFallback className='text-orange-600 font-bold font-[oswald] uppercase'>
                {userProfile?.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h3 className='text-2xl font-bold text-orange-600'>
                Hi {userProfile?.name} !
              </h3>
              <p className='text-sm '>{userProfile?.email}</p>
            </div>
          </div>
          <Button
            variant='ghost'
            className='text-1xl'
            onClick={() => setIsEditing(true)}
          >
            <FilePenIcon
              className={
                isEditing ? 'text-green-500 h-5 w-5' : 'text-orange-600 h-5 w-5'
              }
            />
            <span className={isEditing ? 'text-green-500' : 'text-orange-600'}>
              Edit Profile
            </span>
          </Button>
        </div>
      </CardHeader>
      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6'>
          <div className='grid gap-2'>
            <Label htmlFor='name' className='text-orange-600 text-1xl'>
              Name
            </Label>
            <Input
              id='name'
              defaultValue={userProfile.name}
              readOnly={!isEditing}
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
          <div className='grid gap-2'>
            <Label htmlFor='email' className='text-orange-600 text-1xl'>
              Email
            </Label>
            <Input id='email' type='email' value={userProfile.email} readOnly />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='phone' className='text-orange-600 text-1xl'>
              Phone
            </Label>
            <Input
              id='phone'
              type='tel'
              defaultValue={userProfile.phone}
              readOnly={!isEditing}
              {...register('phone', {
                required: 'Phone is required.',
              })}
            />
            {errors.phone && (
              <p className='text-sm mt-2 text-red-500'>
                {errors.phone?.message}
              </p>
            )}
          </div>

          <div className='grid gap-2 '>
            <Label htmlFor='role' className='text-orange-600 text-1xl'>
              User Role
            </Label>
            <Input id='role' value={userProfile?.role} readOnly />
          </div>

          <div className='grid gap-2 col-span-full'>
            <Label htmlFor='address' className='text-orange-600 text-1xl'>
              Address
            </Label>
            <Textarea
              id='address'
              defaultValue={userProfile?.address}
              readOnly={!isEditing}
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
        </CardContent>

        {isEditing && (
          <CardFooter className='flex justify-end gap-2 p-6'>
            <Button variant='outline' onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant='orangeBtn' type='submit'>
              Save Changes
            </Button>
          </CardFooter>
        )}
      </form>
    </Card>
  );
};

export default Profile;
