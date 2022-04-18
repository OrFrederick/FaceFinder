import os
import datetime

def get_video_title():
    now = datetime.datetime.now()
    return str(now.strftime("%Y-%m-%d--%H-%M")) + '.avi'

def convert_avi_to_mp4(avi_file_path, output_name):
    os.popen(f"ffmpeg -i {avi_file_path} -ac 2 -b:v 2000k -c:a aac -c:v libx264 -b:a 160k -vprofile high -bf 0 -strict experimental -f mp4 {output_name} -hide_banner -loglevel error")