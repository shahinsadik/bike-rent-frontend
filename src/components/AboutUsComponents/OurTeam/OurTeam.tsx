import { IoMdContacts } from 'react-icons/io';

const OurTeam = () => {
  return (
    <section className='py-10'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-7'>
          <div className='flex justify-center'>
            <IoMdContacts className='text-5xl font-extrabold text-orange-600' />
          </div>
          <h1 className='lg:text-5xl text-3xl font-semibold uppercase lg:mt-2 text-center'>
            Our Team
          </h1>
        </div>
        <div className='grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-6 lg:grid-cols-5 gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full'>
          <div className='block group md:col-span-2 lg:col-span-1'>
            <div className='relative mb-6'>
              <img
                src='https://pagedone.io/asset/uploads/1696238374.png'
                alt='Antonio image'
                className='w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-orange-600'
              />
            </div>
            <h4 className='text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-orange-400'>
              Nabiur Siddique
            </h4>
            <span className='text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900'>
              Founder
            </span>
          </div>
          <div className='block group md:col-span-2 lg:col-span-1'>
            <div className='relative mb-6'>
              <img
                src='https://pagedone.io/asset/uploads/1696238396.png'
                alt='Patricia image'
                className='w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-orange-600'
              />
            </div>
            <h4 className='text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-orange-400'>
              Angela Yu
            </h4>
            <span className='text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900'>
              Co-Founder
            </span>
          </div>
          <div className='group group md:col-span-2 lg:col-span-1'>
            <div className='relative mb-6'>
              <img
                src='https://pagedone.io/asset/uploads/1696238411.png'
                alt='Jerom image'
                className='w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-orange-600'
              />
            </div>
            <h4 className='text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-orange-400'>
              Nishat Iftekhar
            </h4>
            <span className='text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900'>
              Chairman
            </span>
          </div>
          <div className='block group md:col-span-2 lg:col-span-1 md:col-start-2 lg:col-start-4'>
            <div className='relative mb-6'>
              <img
                src='https://pagedone.io/asset/uploads/1696238425.png'
                alt='Yasmine image'
                className='w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-orange-600'
              />
            </div>
            <h4 className='text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-orange-400'>
              Yasmine Tano
            </h4>
            <span className='text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900'>
              CEO
            </span>
          </div>
          <div className='block group min-[500px]:col-span-2 mx-auto md:col-span-2 lg:col-span-1'>
            <div className='relative mb-6'>
              <img
                src='https://pagedone.io/asset/uploads/1696238446.png'
                alt='Martin image'
                className='w-40 h-40 rounded-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent group-hover:border-orange-600'
              />
            </div>
            <h4 className='text-xl font-semibold text-gray-900 mb-2 capitalize text-center transition-all duration-500 group-hover:text-orange-400'>
              Zisan Islam
            </h4>
            <span className='text-gray-500 text-center block transition-all duration-500 group-hover:text-gray-900'>
              Product Manager
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
