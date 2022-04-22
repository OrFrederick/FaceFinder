import { DetectionIf, PersonIf } from '../Interfaces/VideoIf';
import { Link } from 'react-router-dom';

function DetectionsRow(props: {
  detection: DetectionIf;
  updateVideoTime: any;
  allDetectionsView?: boolean;
}) {
  return (
    <tr>
      {props.allDetectionsView ? (
        <td>
          <Link
            to={`/video/${props.detection.video_id}?ts=${props.detection.timestamp}`}
          >
            {props.detection.video_id}
          </Link>
        </td>
      ) : (
        <td onClick={() => props.updateVideoTime(props.detection.timestamp)}>
          {props.detection.timestamp}
        </td>
      )}
      <td style={{ color: `#${props.detection.person?.color}` }}>
        <Link to={`/person/${props.detection.person_id}`}>
          {props.detection.person?.name}
        </Link>
      </td>
      <td>{props.detection.datetime}</td>
    </tr>
  );
}

export default DetectionsRow;
