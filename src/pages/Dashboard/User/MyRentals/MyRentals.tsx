import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useMyRentalsQuery } from '@/redux/features/rentals/rentals.api';
import { TRental } from '@/types/rentalType';
import Loading from '@/components/CommonComponents/Loading';

const MyRentals = () => {
  const { data, isLoading } = useMyRentalsQuery(undefined);
  const [activeTab, setActiveTab] = useState('unpaid');

  const myRentals = data?.data;

  const paidRentals = myRentals?.filter((rental: TRental) => rental.isPaid);
  const unpaidRentals = myRentals?.filter((rental: TRental) => !rental.isPaid);

  const handlePayment = () => {
    console.log('we will redirect to payment page');
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='p-6 font-[oswald]'>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className='mb-4'>
          <TabsTrigger value='unpaid'>Unpaid</TabsTrigger>
          <TabsTrigger value='paid'>Paid</TabsTrigger>
        </TabsList>

        <TabsContent value='unpaid'>
          <div className='space-y-4'>
            {unpaidRentals && unpaidRentals.length > 0 ? (
              unpaidRentals.map((rental: TRental) => (
                <Card
                  key={rental._id}
                  className='border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden'
                >
                  <CardContent className='flex items-center justify-between p-6'>
                    <div>
                      <h3 className='text-lg font-bold text-gray-800 mb-2'>
                        Bike ID:{' '}
                        <span className='text-orange-600'>{rental.bikeId}</span>
                      </h3>
                      <p className='text-sm font-bold text-orange-600'>
                        Start:{' '}
                        <span className='font-medium text-black'>
                          {new Date(rental.startTime).toLocaleString()}
                        </span>
                      </p>
                      <p className='text-sm font-bold text-orange-600'>
                        Return:{' '}
                        <span className='font-medium text-black'>
                          {rental.returnTime
                            ? new Date(rental.returnTime).toLocaleString()
                            : 'Not Returned Yet'}
                        </span>
                      </p>
                      <p className='mt-2 text-lg font-bold text-gray-800'>
                        Total:
                        {rental.totalCost && rental.totalCost > 0
                          ? ` $${rental.totalCost.toFixed(2)}`
                          : ' Pending Calculation'}
                      </p>
                    </div>
                    <Button
                      variant='orangeBtn'
                      size='lg'
                      onClick={() => handlePayment()}
                      className='hover:bg-orange-700 transition-colors duration-300'
                    >
                      Pay Now
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className='text-muted-foreground'>No unpaid rentals found.</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value='paid'>
          <div className='space-y-4'>
            {paidRentals && paidRentals.length > 0 ? (
              paidRentals.map((rental: TRental) => (
                <Card
                  key={rental._id}
                  className='border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl overflow-hidden'
                >
                  <CardContent className='flex items-center justify-between p-6'>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-800 mb-2'>
                        Bike Name:{' '}
                        <span className='text-orange-600'>{rental.bikeId}</span>
                      </h3>
                      <p className='text-sm text-gray-600'>
                        Start:{' '}
                        <span className='font-medium'>
                          {new Date(rental.startTime).toLocaleString()}
                        </span>
                      </p>
                      <p className='text-sm text-gray-600'>
                        Return:{' '}
                        <span className='font-medium'>
                          {rental.returnTime
                            ? new Date(rental.returnTime).toLocaleString()
                            : 'Not Returned Yet'}
                        </span>
                      </p>
                      <p className='mt-4 text-lg font-bold text-gray-800'>
                        Total:
                        {rental.totalCost
                          ? ` $${rental.totalCost.toFixed(2)}`
                          : ' Pending Calculation'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className='text-muted-foreground'>No paid rentals found.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyRentals;
