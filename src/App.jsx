import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import Stream from './pages/Stream';
import Sports from './pages/Sports';
import EventDetails from './components/EventDetails';
import Navbar from './components/Navbar';
import CreateEventForm from './components/CreateEventForm';

function App() {
  return (
      <div className='w-full h-full p-4'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event" element={<Event />} />
          <Route path="/event/:title" element={<EventDetails />} />
          <Route path="/stream" element={<Stream />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/create-event" element={<CreateEventForm/>} />
        </Routes>
        <Navbar />
      </div>
  );
}

export default App;
