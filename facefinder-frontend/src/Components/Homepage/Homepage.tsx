import { useEffect, useState } from 'react';
import VideosWrapper from '../VideosWrapper/VideosWrapper';
import axios from 'axios';

function Homepage() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/videos`)
      .then((response) => setVideos(response.data));
  };

  useEffect(fetchVideos, []);

  return (
    <div>
      HOMEPAGE
      <VideosWrapper videos={videos} />
    </div>
  );
}

export default Homepage;
