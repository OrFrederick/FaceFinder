import { VideoIf } from './VideoIf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular } from '@fortawesome/fontawesome-svg-core/import.macro';

function Video(props: { video: VideoIf }) {
  const formatName = (name: string) => {
    return name.replace('.mp4', '');
  };

  return (
    <div className="group sm:w-full md:w-1/4 xl:w-1/5 md:mx-1 lg:mx-2 my-5 p-5 border border-solid border-gray-200 hover:border-gray-400 bg-gray-100 hover:bg-gray-300 rounded">
      <div className=" relative w-fit h-fit">
        <FontAwesomeIcon
          icon={regular('circle-play')}
          className="invisible group-hover:visible mt-1/2 fa-xl bg-white p-1 rounded  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <video className="rounded">
          <source src="/Videos/2022-04-20--21-00.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="">
        <h5 className="mt-1">{formatName(props.video.title)}</h5>
      </div>
    </div>
  );
}

export default Video;
