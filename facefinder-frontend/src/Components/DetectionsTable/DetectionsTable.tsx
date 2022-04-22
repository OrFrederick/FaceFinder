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
    <div className="h-[calc(100vh-2.5rem)] w-screen overflow-y-auto ">
      <table className="w-1/2 m-auto">
        <thead>
          <tr>
            <th className="bg-white px-5 sticky top-0">
              {props.allDetectionsView ? 'Video' : 'Timestamp'}
            </th>
            <th className="bg-white px-10 sticky top-0">Person</th>
            <th className="bg-white px-5 sticky top-0">Datetime</th>
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
    </div>
  );
}
export default DetectionsTable;
