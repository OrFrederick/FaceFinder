from stream_handler import StreamHandler
from helper import get_video_title, convert_avi_to_mp4
from recognizer import Recognizer
from api_handler import ApiHandler
import datetime
import time
import cv2
import sys
import config
import pickle

class Mainloop:
    def __init__(self):
        self.stream_handler = StreamHandler()
        self.api_handler = ApiHandler()
        self.recognizer = Recognizer()
        self.known_face_encodings = []

    def recognize(self, frame, count):
        o_frame = frame
        face_locations, face_encodings = self.recognizer.get_faces(frame)
        for face_location, face_encoding in zip(face_locations, face_encodings):
            top, right, bottom, left = face_location
            top *= config.FACTOR
            right *= config.FACTOR
            bottom *= config.FACTOR
            left *= config.FACTOR

            person_id = False # self.api_handler.lookup_face(face_encoding, self.known_face_encodings)
            # When we know the person
            if person_id:
                self.api_handler.add_facedetection(person_id, self.video_id, round(count/self.stream_handler.FPS, 2), top, right, bottom, left)
                name = self.api_handler.name_by_id(person_id)

            # Register the person if its unknown
            else:
                print("add")
                name, person_id = self.api_handler.add_person(face_encoding)
                self.known_face_encodings.append(face_encoding)
               # person_id = self.api_handler.lookup_face(face_encoding, self.known_face_encodings)
                self.api_handler.add_facedetection(person_id, self.video_id, round(count/self.stream_handler.FPS, 2), top, right, bottom, left)
            self.log(f"[DETECTED] {name}")
        return frame

    def process_stream(self, end_time, video_title):
        # self.known_face_encodings = self.api_handler.get_known_encodings()                 
        self.log((self.stream_handler.FPS, self.stream_handler.WIDTH, self.stream_handler.HEIGHT))
        video_path = config.VIDEO_PATH + video_title
        output_video = cv2.VideoWriter(video_path, cv2.VideoWriter_fourcc(*'XVID'), self.stream_handler.FPS, (self.stream_handler.WIDTH, self.stream_handler.HEIGHT))

        self.log(f"Starting {video_path}")
        count = 1
        while datetime.datetime.now() < end_time:
            try:
                frame = self.stream_handler.read()
                frame = self.recognize(frame, count)
                # Write the frame into the file
                output_video.write(frame)                
            except KeyboardInterrupt:
                convert_avi_to_mp4(video_path, video_path.replace('.avi', '.mp4'))
                self.api_handler.add_video_recording_end(self.video_id)
                sys.exit()
            print(str(count).zfill(3), end="\r")
            count += 1
        
        output_video.release()
        convert_avi_to_mp4(video_path, video_path.replace('.avi', '.mp4'))
    
    def main(self):
        while True:
            try:
                end_date = datetime.datetime.now() + datetime.timedelta(minutes=1)
                video_title = get_video_title()
                self.video_id = self.api_handler.get_video_id()
                self.api_handler.add_video(video_title.replace('.avi', '.mp4'), self.video_id)
                # self.known_face_encodings = self.api_handler.get_known_encodings()
                self.process_stream(end_date, video_title)
                self.api_handler.add_video_recording_end(self.video_id)
                time.sleep(2)
            except KeyboardInterrupt:
                print("See you!")
                break
            
    def log(self, msg):
        print(msg)

if __name__ == '__main__':
    Mainloop().main()