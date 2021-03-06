import Video from './Video';
import { VideoIf } from '../../Interfaces';
import { useState } from 'react';

function VideosWrapper(props: { videos: VideoIf[] }) {
  return (
    <div className="flex flex-row flex-wrap justify-evenly w-fit m-auto">
      {props.videos.map((p) => (
        <Video key={p.id} video={p} />
      ))}
    </div>
  );
}

export default VideosWrapper;
