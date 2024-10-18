import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  FaBolt,
  FaMotorcycle,
  FaMapMarkedAlt,
  FaMobileAlt,
} from 'react-icons/fa';
import bikeLogo from '../../../assets/icons/Bike logo.png';

const OurJourney = () => {
  return (
    <div className='font-[oswald] max-w-6xl mx-auto py-10'>
      <div className='mb-5'>
        <div className='flex justify-center'>
          <img src={bikeLogo} alt='' />
        </div>
        <h1 className='lg:text-5xl text-3xl font-semibold uppercase lg:mt-5 text-center'>
          Our Journey
        </h1>
      </div>
      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            date='2015'
            iconStyle={{ background: '#f97316', color: '#fff' }}
            icon={<FaMotorcycle />}
          >
            <h3 className='vertical-timeline-element-title text-orange-600'>
              Founded Our Service
            </h3>
            <h4 className='vertical-timeline-element-subtitle text-orange-600'>
              Naogaon, Bangladesh
            </h4>
            <p>
              We started with a vision to provide convenient and affordable
              motorbike rentals for everyone.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date='2017'
            iconStyle={{ background: '#f97316', color: '#fff' }}
            icon={<FaMapMarkedAlt />}
          >
            <h3 className='vertical-timeline-element-title text-orange-600'>
              Expanded Nationwide
            </h3>
            <h4 className='vertical-timeline-element-subtitle text-orange-600'>
              Across the USA
            </h4>
            <p>
              Our service expanded to cover major cities across the USA, making
              motorbike rentals accessible nationwide.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date='2019'
            iconStyle={{ background: '#f97316', color: '#fff' }}
            icon={<FaMobileAlt />}
          >
            <h3 className='vertical-timeline-element-title text-orange-600'>
              Launched Our Mobile App
            </h3>
            <h4 className='vertical-timeline-element-subtitle text-orange-600'>
              iOS & Android
            </h4>
            <p>
              We launched a user-friendly mobile app, allowing customers to book
              motorbikes anytime, anywhere.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            date='2022'
            iconStyle={{ background: '#f97316', color: '#fff' }}
            icon={<FaBolt />}
          >
            <h3 className='vertical-timeline-element-title text-orange-600'>
              Introduced Electric Bikes
            </h3>
            <h4 className='vertical-timeline-element-subtitle text-orange-600'>
              Sustainable Riding
            </h4>
            <p>
              In line with our commitment to sustainability, we added electric
              motorbikes to our fleet.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default OurJourney;
