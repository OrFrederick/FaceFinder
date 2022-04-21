import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { VideoIf } from '../Interfaces/VideoIf';
import VideoPlayer from './VideoPlayer';
import DetectionsTable from '../DetectionsTable/DetectionsTable';

function VideoDetail() {
  const params = useParams();

  const [video, setVideo] = useState<VideoIf>();
  const [player, setPlayer] = useState<any>();

  const fetchVideo = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/videos/${params.id}`)
      .then((response) => setVideo(response.data));
  };

  useEffect(fetchVideo, []);
  return (
    <div>
      <div className="group w-fit">
        <FontAwesomeIcon icon={solid('circle-info')} />
        <div className="w-0 h-0 info invisible group-hover:visible group-hover:w-fit group-hover:h-fit">
          {video && (
            <ol>
              <li>ID: {video.id}</li>
              <li>Title: {video.title}</li>
              <li>
                Recording start:{' '}
                {new Date(video.recording_start).toLocaleString()}
              </li>
              <li>
                Recording end:{' '}
                {video.recording_end
                  ? new Date(video.recording_end).toLocaleString()
                  : 'N/A'}
              </li>
            </ol>
          )}
        </div>
      </div>
      <div className="ml-5 w-fit flex flex-row">
        <VideoPlayer video={video} setPlayer={setPlayer} />
        <DetectionsTable
          detections={video?.detections}
          player={player}
          allDetectionsView={false}
        />
      </div>
    </div>
  );
}

export default VideoDetail;
