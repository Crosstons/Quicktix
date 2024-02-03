import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import sportsEventData from './Data2';

function EventList2() {
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: isMobile ? 1 : 4,
  };

  return (
    <div className='my-10 w-full'>
      <h2 className='text-3xl font-medium dark:text-white py-4'>Sports</h2>
      <div className='mt-10'>
        <Slider {...settings}>
          {sportsEventData.map((d) => (
            <div key={d.title} className='bg-white h-[450px] text-black rounded-xl'>
              <div className='h-full bg-indigo-500 flex justify-center items-center rounded-xl mr-4'>
                <img src={d.img} alt='' className='h-full w-full rounded-xl' />
              </div>
              <div className='py-4'>
                <h3 className='text-xl font-semibold mb-2'>{d.title}</h3>
                <h4 className='text-lg font-regular mb-2 text-gray-500'>{d.genre}</h4>
                <Link to={`/event/${d.title}`} className='mt-4 bg-gray-100 text-gray-500 px-2 py-1 rounded-md text-sm'>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default EventList2;
