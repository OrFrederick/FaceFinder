import { DetectionIf, PersonIf } from '../Interfaces/VideoIf';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function DetectionsRow(props: {
  detection: DetectionIf;
  updateVideoTime: any;
  allDetectionsView?: boolean;
}) {
  const [person, setPerson] = useState<PersonIf>();

  const fetchPerson = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/people/${props.detection.person_id}`
      )
      .then((response) => setPerson(response.data));
  };

  useEffect(fetchPerson, []);

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
      <td style={{ color: `#${person?.color}` }}>{person?.name}</td>
      <td>{props.detection.datetime}</td>
    </tr>
  );
}

export default DetectionsRow;
