import { FaTicketAlt, FaCheckCircle, FaMoneyBill } from 'react-icons/fa';

const promotions = [
  {
    code: 'SUMMER20',
    description: 'Get 20% off on all bike rentals this summer!',
    expiry: 'Expires: August 31, 2024',
    icon: <FaTicketAlt className='w-8 h-8 text-orange-500' />,
  },
  {
    code: 'FIRSTRIDE',
    description: 'Enjoy 15% off on your first rental with us.',
    expiry: 'Expires: December 31, 2024',
    icon: <FaCheckCircle className='w-8 h-8 text-green-500' />,
  },
];

const CouponsAndDiscount = () => {
  return (
    <div className='font-[oswald] max-w-4xl lg:mx-auto md:mx-auto mx-3 py-12'>
      <div>
        <div className='flex justify-center'>
          {/* <img src={bikeLogo} alt='' /> */}
          <FaMoneyBill className='text-4xl text-orange-600' />
        </div>
        <h1 className='lg:text-5xl text-3xl font-semibold uppercase lg:mt-2 text-center'>
          <span className='text-orange-600'>❝</span> Coupons{' '}
          <span className='text-orange-600'>❞</span> <span></span>
        </h1>
      </div>

      {/* Promotions Section */}
      <div className='space-y-6'>
        {promotions.map((promo, index) => (
          <div
            key={index}
            className='flex items-center p-6 bg-white rounded-lg shadow-lg'
          >
            <div className='mr-4'>{promo.icon}</div>
            <div>
              <h3 className='text-xl font-semibold text-gray-900'>
                {promo.code}
              </h3>
              <p className='text-gray-700'>{promo.description}</p>
              <p className='text-sm text-gray-500'>{promo.expiry}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Usage Instructions */}
      <div className='mt-12 p-6 bg-blue-50 rounded-lg shadow-lg'>
        <h3 className='text-2xl font-semibold text-blue-600 mb-4'>
          How to Apply a Coupon
        </h3>
        <p className='text-gray-700'>
          To apply a coupon code, follow these simple steps:
        </p>
        <ul className='list-disc list-inside mt-4 text-gray-700'>
          <li>Choose your bike and proceed to the checkout page.</li>
          <li>Enter the coupon code in the "Promo Code" field.</li>
          <li>Click "Apply" to see your discounted total.</li>
          <li>Complete your booking to enjoy the discount!</li>
        </ul>
      </div>
    </div>
  );
};

export default CouponsAndDiscount;
