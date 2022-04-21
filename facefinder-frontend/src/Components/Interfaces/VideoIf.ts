export interface DetectionIf {
  id: number;
  timestamp: number;
  datetime: string;
  video_id: number;
  person_id: number;
}

export interface VideoIf {
  id: number;
  title: string;
  recording_start: string;
  recording_end: string;
  detections?: DetectionIf[];
}

export interface PersonIf {
  id: number;
  name: string;
  color: string;
}
