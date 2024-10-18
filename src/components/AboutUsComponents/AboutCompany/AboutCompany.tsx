import aboutCompanyImage from '../../../assets/images/Banner Images/carousel-image-2.jpg';

const AboutCompany = () => {
  return (
    <div className='mt-20 mb-10 lg:mx-14 mx-8'>
      <div className='grid lg:grid-cols-2  gap-7'>
        <div>
          <h1 className='text-3xl font-bold text-orange-500'>
            SUPER TRUSTED & APPROVED BIKE RENTAL COMPANY OF BANGLADESH
          </h1>
          <p className='lg:mt-5 sm:mt-3 text-justify'>
            Bike Rental is your premier online destination for high-quality
            bike. We cater to athletes and fitness enthusiasts of all levels,
            offering a wide range of products designed to enhance performance,
            comfort, and style. Our curated selection features top brands and
            the latest innovations in sports gear, ensuring that our customers
            have access to the best tools for success. At Sportify, we are
            passionate about fostering a supportive community, providing
            exceptional customer service, and promoting a healthy, active
            lifestyle. Join us and experience the difference that the right
            accessories can make in achieving your athletic goals.
          </p>
        </div>
        <div>
          <img src={aboutCompanyImage} className='rounded-lg' alt='' />
        </div>
      </div>
      {/* mission and vision of the company */}
      <div className='my-5'>
        <h1 className='text-2xl font-bold text-orange-500'>OUR MISSION</h1>
        <p className='text-justify'>
          At Sportify, our mission is to empower athletes and sports enthusiasts
          by providing top-quality sports accessories that enhance performance,
          comfort, and style. We are dedicated to offering a diverse range of
          products that cater to various sports and fitness activities, ensuring
          that our customers have access to the best gear to achieve their
          goals. Our commitment to excellence extends beyond just our products;
          we strive to deliver exceptional customer service, fostering a
          community of passionate individuals who inspire and support one
          another. By continuously innovating and staying attuned to the latest
          trends and advancements in sports technology, Bike Rental aims to be
          the go-to destination for all your sporting needs.
        </p>
      </div>
      <div className='my-5'>
        <h1 className='text-2xl font-bold text-orange-500'>OUR VISION</h1>
        <p className='text-justify'>
          Our vision at Bike Rental is to become the leading online destination
          for sports accessories, recognized for our unwavering commitment to
          quality, innovation, and customer satisfaction. We envision a world
          where every athlete, from beginners to professionals, has the tools
          and resources they need to excel in their chosen sport. By building
          strong relationships with our customers and partnering with top
          brands, we aim to create a seamless and enjoyable shopping experience
          that empowers individuals to push their limits and achieve their
          personal best. Sportify aspires to inspire a healthier, more active
          lifestyle for people of all ages, promoting the benefits of physical
          activity and the joy of sports participation.
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
