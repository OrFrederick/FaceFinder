import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import VideoDetail from './Components/VideoDetail/VideoDetail';
import AllDetections from './Components/AllDetections/AllDetections';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/detections" element={<AllDetections />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
