import os
import requests
from parsel import Selector

FLAGS_URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
FLAGS_SELECTOR = "#mw-content-text .mod-gallery ul li .thumb a img::attr(src)"


def save_images(image_urls: list):
    for image_url in image_urls:
        # startIndex = image_url.find("Flag")
        # endIndex = image_url.rfind("/")
        # formatted_name = image_url[startIndex:endIndex]
        filename = image_url.split("/")[-1]

        if not os.path.isdir("images"):
            os.mkdir("images")

        with open(f"images/{filename}", mode="wb") as file:
            response = requests.get(image_url)
            file.write(response.content)


def get_flag_images():
    response = requests.get(FLAGS_URL)
    selector = Selector(response.text)

    flags = selector.css(FLAGS_SELECTOR).getall()
    flags = [f"https:{flag}" for flag in flags]

    return flags


if __name__ == "__main__":
    flag_images = get_flag_images()
    save_images(flag_images)
