import { DetectionIf } from '../Interfaces/VideoIf';
import DetectionsRow from './DetectionsRow';

function DetectionsTable(props: {
  detections?: DetectionIf[];
  player?: any;
  allDetectionsView: boolean;
}) {
  const updateVideoTime = (ts: number) => {
    props.player.seek(ts);
  };

  return (
    <table>
      <thead>
        <tr className="w-auto">
          <th className="px-5">
            {props.allDetectionsView ? 'Video' : 'Timestamp'}
          </th>
          <th className="px-10">Person</th>
          <th className="px-5">Datetime</th>
        </tr>
      </thead>
      <tbody>
        {props.detections?.map((d) => (
          <DetectionsRow
            key={d.id}
            updateVideoTime={updateVideoTime}
            detection={d}
            allDetectionsView={props.allDetectionsView}
          />
        ))}
      </tbody>
    </table>
  );
}
export default DetectionsTable;
