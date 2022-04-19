import os
from dotenv import load_dotenv
load_dotenv()

# Recognition
FACTOR = 3  # Recognition resize factor
STREAM_URL = os.environ.get("STREAM_URL")

# Data
VIDEO_PATH = "../data/videos/"
FACE_IMG_PATH = "../data/images/faces/"

API_URL = 'http://localhost:3000/api'

# Show the frames
SHOW = True

# Rotate the frames 180°
ROTATE = False
