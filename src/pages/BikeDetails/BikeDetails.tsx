import CustomModal from '@/components/CommonComponents/CustomModal';
import Loading from '@/components/CommonComponents/Loading';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/redux/features/auth/authSlice';
import { useGetSingleBikeQuery } from '@/redux/features/bikes/bikes.api';
import { useCreateRentalMutation } from '@/redux/features/rentals/rentals.api';
import { useAppSelector } from '@/redux/hooks';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useParams, useNavigate } from 'react-router-dom';

const BikeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useAppSelector(useCurrentUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, refetch } = useGetSingleBikeQuery(id);
  const bike = data?.data;
  const [createRental, { isLoading: createRentalLoading }] =
    useCreateRentalMutation();

  const handleRentNow = async (startTime: string) => {
    try {
      const rentInfo = {
        bikeId: bike._id,
        startTime: startTime,
      };
      const result = await createRental(rentInfo);

      if (result?.data) {
        // logging whole data
        // console.log(result.data.data);
        // console.log(result.data.data.result);
        // console.log(result.data.data.paymentSession.payment_url);
        setIsModalOpen(false);
        toast.success('Pay 100 taka to confirm rent');
        window.location.href = result.data.data.paymentSession.payment_url;
        refetch();
      } else {
        toast.error('Bike is not available');
        setIsModalOpen(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading || createRentalLoading) {
    return <Loading />;
  }

  return (
    <div className='font-[oswald] px-4 py-12 md:py-8 lg:py-8 lg:px-20 lg:my-10 mt-0 '>
      <div className='grid md:grid-cols-2 gap-8 lg:gap-12'>
        <div className='lg:mt-0 md:mt-0 mt-10'>
          <img
            src={bike.image}
            alt='Bike'
            width={800}
            height={600}
            className='w-full h-auto rounded-lg object-cover'
            style={{ aspectRatio: '800/600', objectFit: 'cover' }}
          />
        </div>
        <div className='order-1 '>
          <div className='space-y-4'>
            <h1 className='text-3xl md:text-4xl font-bold text-orange-600'>
              {bike.name}
            </h1>
            <p className='text-muted-foreground text-lg'>{bike.description}</p>
            <div className='grid grid-cols-2 gap-4'>
              <div>
                <p className='text-muted-foreground'>Price per Hour</p>
                <p className='text-2xl font-bold text-orange-600'>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(bike.pricePerHour)}
                </p>
              </div>
              <div>
                <p className='text-muted-foreground'>Availability</p>
                <p className='text-2xl font-bold text-orange-600'>
                  {bike.isAvailable ? 'Available' : 'Not Available'}
                </p>
              </div>
              <div>
                <p className='text-muted-foreground'>Engine Capacity</p>
                <p className='text-2xl font-bold text-orange-600'>
                  {bike.cc + ' cc'}{' '}
                </p>
              </div>
              <div>
                <p className='text-muted-foreground'>Year</p>
                <p className='text-2xl font-bold text-orange-600'>
                  {bike.year}
                </p>
              </div>
              <div>
                <p className='text-muted-foreground'>Model</p>
                <p className='text-2xl font-bold text-orange-600'>
                  {bike.model}
                </p>
              </div>
              <div>
                <p className='text-muted-foreground'>Brand</p>
                <p className='text-2xl font-bold text-orange-600'>
                  {bike.brand}
                </p>
              </div>
            </div>
            <div className='flex gap-4'>
              {user ? (
                bike.isAvailable ? (
                  <Button
                    size='lg'
                    variant='orangeBtn'
                    onClick={() => setIsModalOpen(true)}
                  >
                    Book Now
                  </Button>
                ) : (
                  <Button size='lg' variant='orangeBtn' disabled>
                    Bike is not available
                  </Button>
                )
              ) : (
                <Button
                  size='lg'
                  variant='orangeBtn'
                  onClick={() => navigate('/signIn')}
                >
                  Login to Rent
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Custom Modal */}
      <CustomModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleRentNow}
      />
    </div>
  );
};

export default BikeDetails;
