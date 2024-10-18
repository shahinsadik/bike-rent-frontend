import {
  FaMotorcycle,
  FaMoneyBill,
  FaRegCalendarAlt,
  FaTachometerAlt,
} from 'react-icons/fa';
import bikeLogo from '../../../assets/icons/Bike logo.png';

const features = [
  {
    title: 'Wide Range of Bikes',
    description:
      'From city bikes to mountain bikes and e-bikes, we have the perfect ride for every journey.',
    icon: <FaMotorcycle className='w-12 h-12 text-green-600' />,
  },
  {
    title: 'Affordable Pricing',
    description:
      'Enjoy competitive rates without compromising on quality. We offer the best value for your money.',
    icon: <FaMoneyBill className='w-12 h-12 text-blue-600' />,
  },
  {
    title: '24/7 Customer Support',
    description:
      'Our friendly support team is always here to assist you with your rental needs, any time of day.',
    icon: <FaRegCalendarAlt className='w-12 h-12 text-purple-600' />,
  },
  {
    title: 'Top-Quality Maintenance',
    description:
      'All our bikes are regularly maintained and inspected to ensure a smooth and safe ride every time.',
    icon: <FaTachometerAlt className='w-12 h-12 text-yellow-600' />,
  },
];

const WhyChooseUs = () => {
  return (
    <div className='font-[oswald] max-w-6xl lg:mx-auto mx-5 py-10'>
      <div className='mb-5'>
        <div className='flex justify-center'>
          <img src={bikeLogo} alt='' />
        </div>
        <h1 className='lg:text-5xl text-3xl font-semibold uppercase lg:mt-5 text-center'>
          Why Choose Us
          <span className='text-orange-600 lg:text-6xl text-3xl'>?</span>
        </h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg'
          >
            <div className='mb-4'>{feature.icon}</div>
            <h3 className='text-xl font-semibold text-gray-900 mb-2'>
              {feature.title}
            </h3>
            <p className='text-gray-600'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
