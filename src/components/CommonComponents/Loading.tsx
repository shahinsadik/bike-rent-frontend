import bikeLogo from '../../assets/icons/Bike logo.png';

const Loading = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-orange-600 flex items-center justify-center'>
        {/* <PiMotorcycleFill className='h-12 w-12 text-orange-600' /> */}
        <img src={bikeLogo} alt='' />
      </div>
    </div>
  );
};

export default Loading;
