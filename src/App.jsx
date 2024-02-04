import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventDetails from './components/EventDetails';
import Navbar from './components/Navbar';
import CreateEventForm from './components/CreateEventForm';
import BookedTickets from './components/BookedTickets';
import EventDetails2 from './components/EventDetails2';

function App() {
  return (
      <div className='w-full h-full p-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:title" element={<EventDetails />} />
          <Route path="/event/2/:title" element={<EventDetails2 />} />
          <Route path="/create-event" element={<CreateEventForm/>} />
          <Route path="/your-bookings" element={<BookedTickets/>} />
          <Route path="/create" element={<CreateEventForm />} />
        </Routes>
        <Navbar />
      </div>
  );
}

export default App;
