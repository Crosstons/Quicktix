import React, { useState } from 'react';

const CreateEventForm = ({ onCreateEvent }) => {
  const [eventData, setEventData] = useState({
    title: '',
    img: '',
    review: '',
    length: '',
    genre: '',
    date: '',
    time: '',
    timeZone: '',
    price: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and perform additional checks if needed
    onCreateEvent(eventData);
    // Reset the form after creating the event
    setEventData({
      title: '',
      img: '',
      review: '',
      length: '',
      genre: '',
      date: '',
      time: '',
      timeZone: '',
      price: '',
      location: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={eventData.title}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={eventData.img}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          {eventData.img && (
            <div className="mb-4">
              <img
                src={eventData.img}
                alt="Image Preview"
                className="w-full h-full object-cover aspect-w-9 aspect-h-16 rounded-md"
              />
            </div>
          )}
          <textarea
            name="review"
            placeholder="Event Description"
            value={eventData.review}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <input
            type="text"
            name="length"
            placeholder="Event Length"
            value={eventData.length}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <input
            type="text"
            name="genre"
            placeholder="Event Genre"
            value={eventData.genre}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <input
            type="text"
            name="time"
            placeholder="Event Time"
            value={eventData.time}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <input
            type="text"
            name="timeZone"
            placeholder="Event Time Zone"
            value={eventData.timeZone}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Event Price"
            value={eventData.price}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Event Location"
            value={eventData.location}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded-md"
            required
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <button
            type="submit"
            className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
          >
            Create Event
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateEventForm;
