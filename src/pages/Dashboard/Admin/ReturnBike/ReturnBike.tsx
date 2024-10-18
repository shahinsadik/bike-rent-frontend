import Loading from '@/components/CommonComponents/Loading';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  useGetAllRentalsQuery,
  useReturnBikeMutation,
} from '@/redux/features/rentals/rentals.api';
import { TRental } from '@/types/rentalType';
import { CheckCheck, CornerUpLeft } from 'lucide-react';
import toast from 'react-hot-toast';

const ReturnBike = () => {
  const { data, isLoading } = useGetAllRentalsQuery(undefined);
  const [returnBike, { isLoading: returnBikeLoading }] =
    useReturnBikeMutation();

  const allRentals = data?.data || [];

  const handleReturn = async (rentalId: string) => {
    try {
      await returnBike(rentalId).unwrap();
      toast.success('Bike returned successfully!');
    } catch (error) {
      console.log(error);
      toast.error('Failed to return the bike.');
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  if (isLoading || returnBikeLoading) {
    return <Loading />;
  }

  return (
    <div className='p-6 font-[oswald]'>
      <div className='flex items-center mb-4 gap-2 text-orange-600 text-2xl'>
        <CornerUpLeft />
        <h2 className='font-bold'>Return Bikes</h2>
      </div>

      <Table className='mt-6 border border-orange-600'>
        <TableHeader>
          <TableRow className='border border-orange-600'>
            <TableHead className='text-orange-600'>Bike Id</TableHead>
            <TableHead className='text-orange-600'>Start Time</TableHead>
            <TableHead className='text-orange-600'>Return Time</TableHead>
            <TableHead className='text-orange-600'>Returned</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allRentals.length > 0 ? (
            allRentals.map((rental: TRental) => (
              <TableRow key={rental._id}>
                <TableCell>{rental.bikeId}</TableCell>
                <TableCell>{formatDate(rental.startTime)}</TableCell>
                <TableCell>
                  {rental.returnTime
                    ? formatDate(rental.returnTime)
                    : 'Not Returned'}
                </TableCell>
                <TableCell>
                  {rental.isReturned ? (
                    <CheckCheck className='text-green-600' />
                  ) : (
                    <Button
                      variant={'orangeBtn'}
                      onClick={() => handleReturn(rental._id as string)}
                      disabled={returnBikeLoading}
                    >
                      Calculate
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={4}
                className='text-center font-bold text-xl text-orange-600'
              >
                Currently No Rental is Available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ReturnBike;
