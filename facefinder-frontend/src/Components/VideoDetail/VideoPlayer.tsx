import { VideoIf } from '../Interfaces';
import 'video-react/dist/video-react.css';
import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from 'video-react';

function VideoPlayer(props: {
  video?: VideoIf;
  setPlayer: (value: any | ((prevVar: any) => any)) => void;
}) {
  return (
    <div className="ml-5">
      <Player
        muted={true}
        autoPlay={true}
        fluid={false}
        width={1000}
        aspectRatio="4:3"
        src={`/Videos/${props.video?.title}`}
        preload="metadata"
        ref={(p: any) => {
          props.setPlayer(p);
        }}
      >
        <ControlBar>
          <ReplayControl seconds={10} order={1.1} />
          <ForwardControl seconds={30} order={1.2} />
          <CurrentTimeDisplay order={4.1} />
          <TimeDivider order={4.2} />
          <VolumeMenuButton disabled />
          <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
        </ControlBar>
      </Player>
    </div>
  );
}

export default VideoPlayer;
