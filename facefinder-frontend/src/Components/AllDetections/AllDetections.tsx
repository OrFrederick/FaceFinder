import { useEffect, useState } from 'react';
import { DetectionIf } from '../Interfaces/VideoIf';
import axios from 'axios';
import DetectionsTable from '../DetectionsTable/DetectionsTable';

function AllDetections() {
  const [detections, setDetections] = useState<DetectionIf[]>();

  const fetchDetections = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/detections`)
      .then((response) => setDetections(response.data));
  };
  useEffect(fetchDetections, []);
  return (
    <div className="w-fit m-auto">
      <DetectionsTable detections={detections} allDetectionsView={true} />
    </div>
  );
}

export default AllDetections;
