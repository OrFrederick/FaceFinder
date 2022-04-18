import face_recognition
import datetime
import requests
import random
import config
import numpy as np
import pickle

class ApiHandler:
    def add_person(self, face_encoding, name=None):
        name = name if name else self.get_unkown_name()
        color = "%06x" % random.randint(0, 0xFFFFFF)
        person_id = requests.post(f"{config.API_URL}/people", {
            'name': name,
            'color': color
        }).json()['id']

        self.add_face_encoding(face_encoding, person_id)
        return name, person_id

    def add_face_encoding(self, encoding, person_id):
        e = pickle.dumps(encoding)
        e = base64.b64encode(e)
        r = requests.post(f"{config.API_URL}/face_encodings/", {
            'person_id': person_id,
            'encoding': e
        })
        """ print({
            'person_id': person_id,
            'encoding': e
        })
        """
        print("1", r.status_code)
    def get_unkown_name(self):
        # Get the person_id of the next registered person
        next_id = requests.get(f'{config.API_URL}/people/next_id').json()['next_id']
        return f"Unkown {next_id}"
    
    def get_video_id(self):
        next_id = requests.get(f'{config.API_URL}/videos/next_id').json()['next_id']
        return next_id

    def add_facedetection(self, person_id, video_id, timestamp, top, right, bottom, left):
        data = {
            "video_id": video_id,
            "person_id": person_id,
            "timestamp": timestamp,
            "datetime": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "top": top,
            "right": right,
            "bottom": bottom,
            "left": left
        }
        r = requests.post(f"{config.API_URL}/detections", data=data)

    def add_video(self, video_title, video_id):
        requests.post(f"{config.API_URL}/videos", {
            "video_id": video_id,
            "title": datetime.datetime.now().strftime("%Y-%m-%d--%H-%M") + '.mp4',
            "recording_start": datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
        })

    def lookup_face(self, face_encoding, known_face_encodings):
        if len(known_face_encodings) == 0: return None

        face_distances = face_recognition.face_distance(
        known_face_encodings, face_encoding)

        best_match_index = np.argmin(face_distances)

        # If we have a match, look it up
        if face_distances[best_match_index] < 0.65:
            # Lookup by encoding
            resp = requests.post(f"{config.API_URL}/person/personId/", data={"encoding": bytearray(known_face_encodings[best_match_index])}).json()
            try:
                return resp['personId']
            except:
                return None

    def name_by_id(self, person_id):
        resp = requests.get(f"{config.API_URL}/person/{person_id}").json()
        return resp['name']

    def add_video_recording_end(self, video_id):
        requests.put(f"{config.API_URL}/videos/{video_id}", data={'recordingEnd': datetime.datetime.now().strftime("%Y-%m-%d %H:%M")})
    
    def get_known_encodings(self):
        encodings = []
        resp = requests.get(f"{config.API_URL}/face_encodings").json()
        for entry in resp:
            e = pickle.loads(entry['encoding']['data'])

            # encoding = np.frombuffer(e, dtype=np.float64)
            encodings.append()
        return encodings
