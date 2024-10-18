import { useEffect } from 'react';
import Loading from '@/components/CommonComponents/Loading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  useGetSingleBikeQuery,
  useUpdateBikeInfoMutation,
} from '@/redux/features/bikes/bikes.api';
import { TBike } from '@/types/bikeType';
import { FilePenIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateBikeInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useGetSingleBikeQuery(id);
  const bike = data?.data;
  const [updateBikeInfo] = useUpdateBikeInfoMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TBike>();

  useEffect(() => {
    if (bike) {
      reset(bike);
    }
  }, [bike, reset]);

  const handleUpdateBikeInfo = async (bikeData: TBike) => {
    try {
      await updateBikeInfo({ id: bikeData._id, bikeInfo: bikeData });
      toast.success('Bike Info Updated Successfully');
      refetch();
      navigate('/dashboard/manage-bikes');
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='mx-auto lg:p-4 font-[oswald]'>
      <Card className='w-full mx-auto'>
        <CardHeader className='py-8 lg:px-6 rounded-t-lg border-b-2'>
          <div className='flex gap-3 text-orange-600 items-center'>
            <FilePenIcon className='text-2xl' />
            <h1 className='text-2xl font-bold capitalize'>Update Bike Info</h1>
          </div>
        </CardHeader>

        <CardContent className='p-6'>
          <form
            onSubmit={handleSubmit(handleUpdateBikeInfo)}
            className='grid grid-cols-1 md:grid-cols-2 lg:gap-6 lg:gap-x-4'
          >
            <div className='grid gap-2 my-3'>
              <Label className='text-orange-600 font-bold' htmlFor='name'>
                Name
              </Label>
              <Input
                id='name'
                type='text'
                placeholder='Enter Bike Name'
                {...register('name', {
                  required: 'Bike name is required.',
                })}
              />
              {errors.name && (
                <p className='text-sm mt-2 text-red-500'>
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className='grid gap-2'>
              <Label className='text-orange-600 font-bold' htmlFor='brand'>
                Brand
              </Label>
              <Input
                id='brand'
                type='text'
                placeholder='Enter bike brand'
                {...register('brand', {
                  required: 'Brand name is required.',
                })}
              />
              {errors.brand && (
                <p className='text-sm mt-2 text-red-500'>
                  {errors.brand?.message}
                </p>
              )}
            </div>

            <div className='grid gap-2'>
              <Label className='text-orange-600 font-bold' htmlFor='model'>
                Model
              </Label>
              <Input
                id='model'
                type='text'
                placeholder='Enter bike model'
                {...register('model', {
                  required: 'Bike model is required.',
                })}
              />
              {errors.model && (
                <p className='text-sm mt-2 text-red-500'>
                  {errors.model?.message}
                </p>
              )}
            </div>

            <div className='grid gap-2'>
              <Label className='text-orange-600 font-bold' htmlFor='year'>
                Year
              </Label>
              <Input
                id='year'
                placeholder='Enter bike year'
                type='number'
                {...register('year', {
                  required: 'Bike year is required.',
                })}
              />
              {errors.year && (
                <p className='text-sm mt-2 text-red-500'>
                  {errors.year?.message}
                </p>
              )}
            </div>

            <div className='grid gap-2'>
              <Label className='text-orange-600 font-bold' htmlFor='cc'>
                CC
              </Label>
              <Input
                id='cc'
                placeholder='Enter bike CC'
                type='number'
                {...register('cc', {
                  required: 'Bike cc is required.',
                })}
              />
              {errors.cc && (
                <p className='text-sm mt-2 text-red-500'>
                  {errors.cc?.message}
                </p>
              )}
            </div>

            <div className='grid gap-2'>
              <Label
                className='text-orange-600 font-bold'
                htmlFor='pricePerHour'
              >
                Price Per Hour
              </Label>
              <Input
                id='pricePerHour'
                type='number'
                placeholder='Enter price per hour'
                {...register('pricePerHour', {
                  required: 'Bike pricePerHour is required.',
                })}
              />
              {errors.pricePerHour && (
                <p className='text-sm mt-2 text-red-500'>
                  {errors.pricePerHour?.message}
                </p>
              )}
            </div>

            <div className='grid gap-2'>
              <Label className='text-orange-600 font-bold' htmlFor='image'>
                Image url{' '}
              </Label>
              <Input
                id='image'
                type='text'
                placeholder='Enter Bike Image URL'
                {...register('image', {
                  required: 'Bike image URL is required.',
                })}
              />
              {errors.image && (
                <p className='text-sm mt-2 text-red-500'>
                  {errors.image?.message}
                </p>
              )}
            </div>

            <div className='grid gap-2'>
              <Label
                className='text-orange-600 font-bold'
                htmlFor='description'
              >
                Description
              </Label>
              <Textarea
                id='description'
                rows={3}
                placeholder='Enter bike description'
                {...register('description', {
                  required: 'Bike description is required.',
                })}
              />
              {errors.description && (
                <p className='text-sm mt-2 text-red-500'>
                  {errors.description?.message}
                </p>
              )}
            </div>

            <div className='col-span-1 md:col-span-2 flex lg:justify-end justify-start gap-2 mt-3 '>
              <Button
                variant={'orangeBtn'}
                size={'lg'}
                type='submit'
                className='w-full'
              >
                Update Bike Info
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateBikeInfo;
