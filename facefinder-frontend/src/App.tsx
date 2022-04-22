import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import VideoDetail from './Components/VideoDetail/VideoDetail';
import PersonDetail from './Components/PersonDetail/PersonDetail';
import AllDetections from './Components/AllDetections/AllDetections';
import PeopleViewer from './Components/PeopleViewer/PeopleViewer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/person/:id" element={<PersonDetail />} />
            <Route path="/detections" element={<AllDetections />} />
            <Route path="/people" element={<PeopleViewer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
