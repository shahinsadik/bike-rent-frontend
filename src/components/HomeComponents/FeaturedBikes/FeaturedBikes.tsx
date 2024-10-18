import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import bikeLogo from '../../../assets/icons/Bike logo.png';
import { useGetAllBikesQuery } from '@/redux/features/bikes/bikes.api';
import BikeCard from '@/components/BikeCard/BikeCard';
import Loading from '@/components/CommonComponents/Loading';
import { TBike } from '@/types/bikeType';

const FeaturedBikes = () => {
  const { data, isLoading } = useGetAllBikesQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  const availableBikes = data?.data?.filter((bike: TBike) => bike.isAvailable);

  return (
    <div className='mt-20 font-[oswald] lg:px-20'>
      <div>
        <div className='flex justify-center'>
          <img src={bikeLogo} alt='Bike Logo' />
        </div>
        <h1 className='lg:text-5xl text-3xl font-semibold uppercase lg:mt-5 text-center'>
          Featured Bikes
        </h1>
      </div>

      <div className='my-10'>
        <Carousel className='lg:w-full w-[90%] mx-auto'>
          <CarouselContent className='-ml-1'>
            {availableBikes && availableBikes.length > 0 ? (
              availableBikes.map(
                (
                  bike: {
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
                  },
                  index: string
                ) => (
                  <CarouselItem
                    key={index}
                    className='pl-1 md:basis-1/2 lg:basis-1/3'
                  >
                    <BikeCard
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
                  </CarouselItem>
                )
              )
            ) : (
              <p className='text-center w-full'>
                No available bikes at the moment.
              </p>
            )}
          </CarouselContent>
          <CarouselPrevious className='ml-7 lg:ml-3' />
          <CarouselNext className='mr-7 lg:mr-3' />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedBikes;
