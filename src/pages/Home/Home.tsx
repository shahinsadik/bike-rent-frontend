import GoToTopButton from '@/components/CommonComponents/GoToTopButton';
import ContactUs from '@/components/HomeComponents/ContactUs/ContactUs';
import CouponsAndDiscount from '@/components/HomeComponents/CouponAndDiscount/CouponAndDiscount';
import FeaturedBikes from '@/components/HomeComponents/FeaturedBikes/FeaturedBikes';
import HeroSection from '@/components/HomeComponents/HeroSection/HeroSection';
import Testimonials from '@/components/HomeComponents/Testimonials/Testimonials';
import WhyChooseUs from '@/components/HomeComponents/WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedBikes />
      <Testimonials />
      <WhyChooseUs />
      <CouponsAndDiscount />
      <ContactUs />
      <GoToTopButton />
    </div>
  );
};

export default Home;
