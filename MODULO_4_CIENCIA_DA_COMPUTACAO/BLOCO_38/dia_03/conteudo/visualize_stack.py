import traceback
import sys


def load_video(video_path):
    traceback.print_stack(file=sys.stdout)
    return "fake video"


def process_video(video_path):
    loaded_video = load_video(video_path)

    print(loaded_video)


process_video("path/to/my/video")
