import { useEffect, useState } from 'react';
import VideosWrapper from './VideosWrapper/VideosWrapper';
import axios from 'axios';
import Searchbar from '../Global/Searchbar/Searchbar';
import { VideoIf } from '../Interfaces';
import { formatTitle } from '../Helper/helper';
import LoadingSpinner from '../Global/LoadingSpinner/LoadingSpinner';

function Homepage() {
  const [videos, setVideos] = useState<VideoIf[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = () => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_API_URL}/videos`).then((response) => {
      setVideos(response.data);
      setLoading(false);
    });
  };

  const handleSearch = (query: string) => {
    if (query.length > 0) {
      let results = videos.filter((video) => {
        return formatTitle(video.title)
          .toLowerCase()
          .match(query.toLowerCase());
      });
      return results.map((r, i) => ({
        key: i,
        title: formatTitle(r.title),
        route: `/video/${r.id}`,
      }));
    }
  };

  useEffect(fetchVideos, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (videos.length === 0) {
    return (
      <h1 className="w-fit h-fit m-auto text-5xl mt-72">
        Couldnt find any Videos, did you start the recording?
      </h1>
    );
  }

  return (
    <div>
      <Searchbar
        handleSearch={handleSearch}
        className="w-1/3 m-auto mt-2 text-xl"
        className2="p-5"
      />
      <VideosWrapper videos={videos} />
    </div>
  );
}

export default Homepage;
