import face_recognition
import config
import cv2

class Recognizer:
    def get_faces(self, img):
        # Resize Convert the image from BGR color (which OpenCV uses) to RGB color (which face_recognition uses)
        frame = cv2.resize(img, (0, 0), fx=1/config.FACTOR, fy=1/config.FACTOR)[:, :, ::-1]
        # Find all the face locations and face encodings in the current frame of video
        face_locations = face_recognition.face_locations(frame)
        face_encodings = face_recognition.face_encodings(frame, face_locations)
        return face_locations, face_encodings

    def get_face_image_by_location(self, image, face_location):
        img = cv2.imread(image)
        top, right, bottom, left = face_location
        top *= config.FACTOR
        bottom *= config.FACTOR
        left *= config.FACTOR
        right *= config.FACTOR
        face_image = img[top:bottom, left:right]
        face_image = cv2.resize(face_image, (150, 150))
        return face_image