// EventDetails.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import eventData from './Data';

function EventDetails() {
  const { title } = useParams();
  const event = eventData.find((e) => e.title === title);
  const [showModal, setShowModal] = useState(false);
  const [numTickets, setNumTickets] = useState(0);

  const handleBookTickets = () => {
    // Perform booking logic here
    console.log(`Booked ${numTickets} tickets for ${event.title}`);
    setShowModal(false);
  };

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        {/* Left Section (Image) */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img src={event.img} alt={event.title} className="object-cover object-center rounded min-w-full" />
        </div>
        
        {/* Right Section (Details) */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{event.title}</h1>
          <p className="mb-8 leading-relaxed">{event.review}</p>
          
          {/* Additional Details */}
          <div className="mt-2 text-lg lg:text-xl font-semibold">
          {`${event.length} • ${event.genre} • ${event.date} • ${event.time} • ${event.timeZone}`}
          </div>
          <h1 className='my-4 text-4xl font-semibold'>{`${event.price}`}</h1>
          <p>{`📍 ${event.location}`}</p>
          
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Book Tickets
            </button>
          </div>
        </div>
        
        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
            <div className="bg-white p-6 rounded-md">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">Book Tickets</h3>
              <label htmlFor="numTickets" className="block mb-2 text-lg lg:text-xl">
                Number of Tickets:
              </label>
              <input
                type="number"
                id="numTickets"
                value={numTickets}
                onChange={(e) => setNumTickets(e.target.value)}
                className="w-full p-2 border rounded-md text-lg lg:text-xl"
              />
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleBookTickets}
                  className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg lg:text-xl mr-2"
                >
                  Confirm
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 text-gray-700 px-6 py-3 rounded-md text-lg lg:text-xl"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default EventDetails;
