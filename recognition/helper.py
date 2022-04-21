import os
import numpy as np
import datetime
import base64


def get_video_title():
    now = datetime.datetime.now()
    return str(now.strftime("%Y-%m-%d--%H-%M")) + '.avi'


def convert_avi_to_mp4(avi_file_path, output_name):
    os.popen(f"ffmpeg -i {avi_file_path} -ac 2 -b:v 2000k -c:a aac -c:v libx264 -b:a 160k -vprofile high -bf 0 -strict experimental -f mp4 {output_name} -hide_banner -loglevel error && rm {avi_file_path}")
    # Convert
    # os.popen(
    #     f"ffmpeg -i {avi_file_path} -c:v copy -c:a copy -y {output_name} -hide_banner -loglevel error && rm {avi_file_path}")
    # Delete old file
    """ os.popen(
        f"rm {avi_file_path}"
    ) """


def encoding_to_string(e):
    # Converts an encoding to a string, so it can be passed to the API via JSON
    return base64.b64encode(e).decode('utf-8')


def string_to_encoding(s):
    return np.frombuffer(base64.b64decode(s.encode("utf-8")))
