import AboutCompany from '@/components/AboutUsComponents/AboutCompany/AboutCompany';
import AboutUsBanner from '@/components/AboutUsComponents/AboutUsBanner/AboutUsBanner';
import OurJourney from '@/components/AboutUsComponents/OurJourney/OurJourney';
import OurLocation from '@/components/AboutUsComponents/OurLocation/OurLocation';
import OurTeam from '@/components/AboutUsComponents/OurTeam/OurTeam';
import GoToTopButton from '@/components/CommonComponents/GoToTopButton';

const AboutUs = () => {
  return (
    <div className='font-[oswald]'>
      <AboutUsBanner />
      <AboutCompany />
      <OurTeam />
      <OurJourney />
      <OurLocation />
      <GoToTopButton />
    </div>
  );
};

export default AboutUs;
