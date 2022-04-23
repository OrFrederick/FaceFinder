import { useEffect, useState } from 'react';
import { DetectionIf } from '../Interfaces';
import axios from 'axios';
import DetectionsTable from '../Global/DetectionsTable/DetectionsTable';
import Searchbar from '../Global/Searchbar/Searchbar';
import LoadingSpinner from '../Global/LoadingSpinner/LoadingSpinner';

function AllDetections() {
  const [detections, setDetections] = useState<DetectionIf[]>();
  const [loading, setLoading] = useState(true);

  const fetchDetections = () => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/detections`)
      .then((response) => {
        setDetections(response.data);
        setLoading(false);
      });
  };

  const handleSearch = (query: string) => {
    if (query.length > 0 && detections) {
      let results = detections.filter((detection) => {
        let name = detection.person.name
          .toLowerCase()
          .match(query.toLowerCase());
        if (name) {
          return name;
        }
        return detection.datetime.toLowerCase().match(query.toLowerCase());
      });
      return results.map((r, i) => ({
        key: i,
        title: (
          <p>
            <p style={{ color: `#${r.person.color}` }}>{r.person.name}</p>
            {r.datetime}
          </p>
        ),
        route: `/video/${r.video_id}?ts=${r.timestamp}`,
      }));
    }
  };

  useEffect(fetchDetections, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!detections || detections?.length === 0) {
    return (
      <h1 className="w-fit h-fit m-auto text-5xl mt-72">
        Couldnt find any Detections
      </h1>
    );
  }

  return (
    <div className="w-1/3 m-auto">
      <Searchbar
        className="w-full m-auto mt-2 text-xl"
        className2="p-5"
        handleSearch={handleSearch}
      />
      <DetectionsTable
        detections={detections}
        allDetectionsView={true}
        className1="mt-5 h-[calc(100vh-10rem)]"
        className2=""
      />
    </div>
  );
}

export default AllDetections;
