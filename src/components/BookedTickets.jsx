import React from 'react';
import eventData from './Data';

const BookedTickets = () => {
  return (
    <div className="container mx-auto px-5 py-24">
      <h1 className="text-3xl font-medium mb-8">Booked Tickets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {eventData.map((event) => (
          <div key={event.title} className="bg-white p-4 rounded-md shadow-md">
            <img src={event.img} alt={event.title} className="w-full sm:h-96  object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-600 mb-2">{event.review}</p>
            <div className="text-sm text-gray-500">
              <strong>Length:</strong> {event.length}
            </div>
            <div className="text-sm text-gray-500">
              <strong>Genre:</strong> {event.genre}
            </div>
            <div className="text-sm text-gray-500">
              <strong>Date:</strong> {event.date}
            </div>
            <div className="text-sm text-gray-500">
              <strong>Booked:</strong> 4
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookedTickets;
