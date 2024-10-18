import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { FaMotorcycle, FaSearch } from 'react-icons/fa';
import { BsCheckCircle } from 'react-icons/bs';
import { ChartNoAxesGanttIcon } from 'lucide-react';
import ConfirmationModal from '@/components/CommonComponents/ConfirmationModal';
import {
  useDeleteBikeMutation,
  useGetAllBikesQuery,
} from '@/redux/features/bikes/bikes.api';
import Loading from '@/components/CommonComponents/Loading';
import { useState } from 'react';
import { TBike } from '@/types/bikeType';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageBikes = () => {
  const { data, isLoading } = useGetAllBikesQuery(undefined);
  const [deleteBike] = useDeleteBikeMutation();

  // Filter functionality
  const [filters, setFilters] = useState({
    brand: '',
    model: '',
    availability: '',
  });

  const [bikeInfo, setBikeInfo] = useState<TBike | null>(null);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const filteredData = data?.data?.filter((bike: TBike) => {
    return (
      (!filters.brand ||
        bike.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
      (!filters.model ||
        bike.model.toLowerCase().includes(filters.model.toLowerCase())) &&
      (!filters.availability ||
        String(bike.isAvailable) === filters.availability)
    );
  });

  // For Delete operation
  const handleDelete = async () => {
    if (bikeInfo) {
      try {
        await deleteBike(bikeInfo._id);
        toast.success('Bike Deleted Successfully');
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='p-6 font-[oswald] '>
      <div className='flex items-center mb-4 gap-2 text-orange-600 text-2xl'>
        <ChartNoAxesGanttIcon />
        <h2 className='font-bold '>Manage Bikes</h2>
      </div>

      {/* Filter Inputs */}
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3'>
        <div className='relative w-full md:w-auto'>
          <FaMotorcycle className='absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500' />
          <input
            type='text'
            name='brand'
            value={filters.brand}
            onChange={handleFilterChange}
            placeholder='Filter by Brand'
            className='input-filter w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
        </div>
        <div className='relative w-full md:w-auto'>
          <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500' />
          <input
            type='text'
            name='model'
            value={filters.model}
            onChange={handleFilterChange}
            placeholder='Filter by Model'
            className='input-filter w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          />
        </div>
        <div className='relative w-full md:w-auto'>
          <BsCheckCircle className='absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500' />
          <select
            name='availability'
            value={filters.availability}
            onChange={handleFilterChange}
            className='select-filter w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500'
          >
            <option value=''>All</option>
            <option value='true'>Available</option>
            <option value='false'>Unavailable</option>
          </select>
        </div>
      </div>

      <Table className='mt-6 border border-orange-600'>
        <TableHeader>
          <TableRow className='border border-orange-600'>
            <TableHead className='text-orange-600'>Name</TableHead>
            <TableHead className='text-orange-600'>Price Per Hour</TableHead>
            <TableHead className='text-orange-600'>CC</TableHead>
            <TableHead className='text-orange-600'>Year</TableHead>
            <TableHead className='text-orange-600'>Brand</TableHead>
            <TableHead className='text-orange-600'>Model</TableHead>
            <TableHead className='text-orange-600'>Availability</TableHead>
            <TableHead className='text-orange-600'>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {!filteredData || filteredData.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className='text-center text-orange-600 text-2xl font-semibold'
              >
                No Bikes Found
              </TableCell>
            </TableRow>
          ) : (
            filteredData.map((bike: TBike) => (
              <TableRow key={bike._id}>
                <TableCell>{bike.name}</TableCell>
                <TableCell>${bike.pricePerHour.toFixed(2)}</TableCell>
                <TableCell>{bike.cc}</TableCell>
                <TableCell>{bike.year}</TableCell>
                <TableCell>{bike.brand}</TableCell>
                <TableCell>{bike.model}</TableCell>
                <TableCell>
                  {bike.isAvailable ? 'Available' : 'Not Available'}
                </TableCell>
                <TableCell>
                  <Link to={`/dashboard/update-bike/${bike._id}`}>
                    <Button
                      variant='orangeBtn'
                      size={'sm'}
                      className='mr-2 my-4'
                    >
                      Update
                    </Button>
                  </Link>

                  {/* Delete modal */}
                  <ConfirmationModal
                    variant={'redBtn'}
                    btnName={'Delete'}
                    alertTitle={'Are You Sure?'}
                    alertMessage={
                      "You cannot recover the data once it's deleted."
                    }
                    confirm={'Confirm'}
                    cancel={'Cancel'}
                    onConfirm={handleDelete}
                    info={bikeInfo || {}}
                    onOpen={() => setBikeInfo(bike)}
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageBikes;
