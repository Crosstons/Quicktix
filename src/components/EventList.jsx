import React from 'react';

const EventCard = ({ imageUrl, title, genre }) => (
  <div className="flex-shrink-0 mx-4">
    <div className="w-[280px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-lg object-cover h-96 w-full" src={imageUrl} alt="" />
      </a>
    </div>
    <p className='text-2xl text-black font-medium mt-4'>{title}</p>
    <p className='text-xl text-gray-700 font-medium'>{genre}</p>
  </div>
);

const EventList = () => {
  // Dummy data for 5 events
  const eventData = [
    
    {
      imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/science-fair-poster-design-template-dd39cad6b695741a0354db956c385327_screen.jpg?ts=1637002483",
      title: "Sci-Fi Expo",
      genre: "Science Fiction"
    },
    {
      imageUrl: "https://marketplace.canva.com/EAFA7W1PLwk/1/0/1131w/canva-cozy-and-homey-japanese-local-food-festival-poster-0pLZ-6Wlnnw.jpg",
      title: "Food Festival",
      genre: "Culinary"
    },
    {
      imageUrl: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/dance-party-template-design-6a3dc0903dc08b51be734750684668ad_screen.jpg?ts=1641265172",
      title: "Dance Party",
      genre: "Music/Dance"
    },
    {
      imageUrl: "https://images.template.net/66817/Business-Conference-Rollup-Banner-Template.jpeg",
      title: "Tech Conference",
      genre: "Technology"
    },
  ];

  return (
    <div className="flex">
      {eventData.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
};

export default EventList;
