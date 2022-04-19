import cv2
import sys
import time
import queue
import config
import socket
import base64
import threading


class StreamHandler:
    def __init__(self):
        self.CAP = self.connect_to_stream()
        self.WIDTH = int(self.CAP.get(cv2.CAP_PROP_FRAME_WIDTH))
        self.HEIGHT = int(self.CAP.get(cv2.CAP_PROP_FRAME_HEIGHT))
        self.FPS = int(self.CAP.get(cv2.CAP_PROP_FPS))

        self.HOST = '127.0.0.1'  # localhost
        self.PORT = 9898

        self.q = queue.Queue()
        t = threading.Thread(target=self._reader)
        t.daemon = True
        t.start()

    def connect_to_stream(self):
        print(
            f"Please run\nraspivid -t 0 -n -b 1000000 -g 30 -ih -pf baseline -w 640 -h 480 -fps 30 -l -o {config.STREAM_URL}\non your RaspberryPi")
        cap = cv2.VideoCapture(config.STREAM_URL)

        while True:
            if not cap.isOpened():
                cap = cv2.VideoCapture(config.STREAM_URL)
                time.sleep(2)
                print("[ERROR] Cant open Videostream")
            else:
                return cap
    # read frames as soon as they are available, keeping only most recent one
    # def _reader(self):
    #     with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    #         s.bind((self.HOST, self.PORT))
    #         s.listen()
    #         print("-- Waiting for connection to the server --")
    #         conn, addr = s.accept()
    #         with conn:
    #             print('Connected by', addr)
    #             c = 0
    #             while True:
    #                 ret, frame = self.CAP.read()
    #                 if not ret: break

    #                 if not self.q.empty():
    #                     try:
    #                         self.q.get_nowait()   # discard previous (unprocessed) frame
    #                     except queue.Empty:
    #                         pass
    #                 self.q.put(frame)
    #                 if c%10 == 0:
    #                     # b64str is a pre computed string of length around 65000*3
    #                     res, buffer = cv2.imencode('.jpg', frame)
    #                     b64str = base64.b64encode(buffer)
    #                     conn.sendall(b64str)
    #                 c += 1
    #     self.CAP.release()
    #     cv2.destroyAllWindows()

    # _reader without sending the frames
    def _reader(self):
        while True:
            ret, frame = self.CAP.read()
            if not ret:
                break
            if not self.q.empty():
                try:
                    self.q.get_nowait()   # discard previous (unprocessed) frame
                except queue.Empty:
                    pass
            if config.ROTATE:
                frame = cv2.rotate(frame, cv2.ROTATE_180)
            if config.SHOW:
                cv2.imshow('LIVE', frame)
                if cv2.waitKey(1) & 0xFF == ord('q'):
                    break
            self.q.put(frame)
        self.CAP.release()
        cv2.destroyAllWindows()

    def read(self):
        return self.q.get()
