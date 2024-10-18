import { Button } from '@/components/ui/button';

const ContactUs = () => {
  return (
    <div className='font-[oswald] py-10'>
      <div>
        <h1 className='lg:text-5xl text-3xl font-semibold uppercase lg:mt-5 mb-8 text-center'>
          Contact Us
        </h1>
      </div>

      <div className='flex justify-center my-5'>
        <div>
          <form className='w-full'>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                <label className='block uppercase tracking-wide text-orange-600 text-xs font-bold mb-2'>
                  First Name
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                  id='grid-first-name'
                  type='text'
                  placeholder='Nabiur'
                />
              </div>
              <div className='w-full md:w-1/2 px-3'>
                <label className='block uppercase tracking-wide text-orange-600 text-xs font-bold mb-2'>
                  Last Name
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-last-name'
                  type='text'
                  placeholder='Siddique'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3'>
                <label className='block uppercase tracking-wide text-orange-600 text-xs font-bold mb-2'>
                  Email
                </label>
                <input
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-email'
                  placeholder='nabiur@gmail.com'
                />
              </div>
            </div>
            <div className='flex flex-wrap -mx-3 mb-6'>
              <div className='w-full px-3'>
                <label className='block uppercase tracking-wide text-orange-600 text-xs font-bold mb-2'>
                  Your Message
                </label>
                <textarea
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-orange-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                  id='grid-password'
                  placeholder='Write your message'
                />
              </div>
            </div>
            <div className='flex justify-center'>
              <Button size='lg' variant={'orangeBtn'} className='w-full'>
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
