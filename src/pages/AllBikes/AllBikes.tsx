import Loading from '@/components/CommonComponents/Loading';
import { useGetAllBikesQuery } from '@/redux/features/bikes/bikes.api';
import bikeLogo from '../../assets/icons/Bike logo.png';
import BikeCard from '@/components/BikeCard/BikeCard';
import GoToTopButton from '@/components/CommonComponents/GoToTopButton';

const AllBikes = () => {
  const { data, isLoading } = useGetAllBikesQuery(undefined);
  const bikes = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='font-[oswald] py-5'>
      <div>
        <div className='flex justify-center'>
          <img src={bikeLogo} alt='' />
        </div>
        <h1 className='lg:text-5xl text-3xl font-semibold uppercase lg:mt-5 text-center'>
          Available Bikes
        </h1>
      </div>

      {bikes?.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10 mx-5'>
          {bikes?.map(
            (bike: {
              _id: string;
              name: string;
              description: string;
              image: string;
              isAvailable: boolean;
              brand: string;
              model: string;
              year: number;
              cc: number;
              pricePerHour: number;
            }) => (
              <BikeCard
                key={bike._id}
                id={bike._id}
                bikeName={bike.name}
                image={bike.image}
                availability={bike.isAvailable}
                description={bike.description}
                brand={bike.brand}
                model={bike.model}
                year={bike.year}
                maxSpeed={bike.cc}
                price={bike.pricePerHour}
              />
            )
          )}
        </div>
      ) : (
        <div className='h-[300px] flex justify-center items-center'>
          <h1 className='text-4xl text-center text-orange-600 font-bold capitalize'>
            Currently No Bikes are available
          </h1>
        </div>
      )}

      <GoToTopButton />
    </div>
  );
};

export default AllBikes;
