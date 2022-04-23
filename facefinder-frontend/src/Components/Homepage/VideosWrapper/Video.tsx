import { VideoIf } from '../../Interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';
import { formatTitle } from '../../Helper/helper';

function Video(props: { video: VideoIf }) {
  return (
    <div className="relative group sm:w-full md:w-1/4 xl:w-1/5 md:mx-1 lg:mx-2 my-5 p-5 border border-solid border-gray-200 hover:border-gray-400 bg-gray-100 hover:bg-gray-300 rounded">
      <Link to={'/video/' + props.video.id}>
        <FontAwesomeIcon
          icon={solid('up-right-from-square')}
          className="group-hover:text-blue-800 mt-1/2 fa-xl p-1 px-2 rounded absolute bottom-2 right-2"
        />
        <div className=" relative w-fit h-fit">
          <video className="rounded">
            <source src={`/Videos/${props.video.title}`} type="video/mp4" />
          </video>
        </div>

        <div className="">
          <h5 className="mt-1">{formatTitle(props.video.title)}</h5>
        </div>
      </Link>
    </div>
  );
}

export default Video;
