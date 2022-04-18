import os
from dotenv import load_dotenv
load_dotenv()

# Recognition
FACTOR = 3 # Recognition resize factor
STREAM_URL = os.environ.get("STREAM_URL") # On the RaspberryPi: raspivid -t 0 -n -b 1000000 -g 30 -ih -pf baseline -w 640 -h 480 -fps 30 -l -o tcp://<YOUR_IP>:3333

# Data
VIDEO_PATH = "../data/videos/"
FACE_IMG_PATH = "../data/images/faces/"

API_URL = 'http://localhost:3000/api'

# Show the frames
SHOW = True