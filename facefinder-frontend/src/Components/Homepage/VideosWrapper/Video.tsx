import { VideoIf } from '../../Interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { Link } from 'react-router-dom';

function Video(props: { video: VideoIf }) {
  const formatName = (name: string) => {
    name = name.replace('.mp4', ' Uhr').replace('--', ' ');
    let date = new Date(name.split(' ')[0]);

    const time = name.split(' ')[1].replace('-', ':');

    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

    return dd + '.' + mm + '.' + yyyy + ' ' + time + ' Uhr ';
  };

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
          <h5 className="mt-1">{formatName(props.video.title)}</h5>
        </div>
      </Link>
    </div>
  );
}

export default Video;
