import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { VideoIf } from '../Interfaces';
import VideoPlayer from './VideoPlayer';
import DetectionsTable from '../Global/DetectionsTable/DetectionsTable';

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
    <div className="overflow-hidden">
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
      <div className="w-screen flex flex-row">
        <VideoPlayer video={video} setPlayer={setPlayer} />
        {video && video.detections && video?.detections?.length > 0 ? (
          <div className="w-full m-auto">
            <DetectionsTable
              detections={video?.detections}
              player={player}
              allDetectionsView={false}
              className1="w-2/3 m-auto h-[70vh]"
              className2=""
            />
          </div>
        ) : (
          <h1 className="w-fit h-fit m-auto text-5xl mt-72">
            No one got detected
          </h1>
        )}
      </div>
    </div>
  );
}

export default VideoDetail;
