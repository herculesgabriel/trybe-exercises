from requests import get
from parsel import Selector


BASE_URL = "https://books.toscrape.com/"
PRODUCT_URL = "catalogue/the-grand-design_405/index.html"

TITLE_SELECTOR = ".row .product_main h1::text"
PRICE_SELECTOR = ".row .product_main .price_color::text"
IMAGE_URL_SELECTOR = ".row > div img::attr(src)"
QUANTITY_AVAILABLE_SELECTOR = ".row .product_main .availability"
DESCRIPTION_SELECTOR = "#product_description + p::text"

PRICE_REGEX = r"\d+\.\d{2}"
IMAGE_URL_REGEX = r"media.+"
QUANTITY_REGEX = r"\d"

SUFFIX = "...more"


def get_book_details():
    response = get(BASE_URL + PRODUCT_URL)

    selector = Selector(response.text)
    selector = selector.css(".product_page")

    title = selector.css(TITLE_SELECTOR).get()
    price = selector.css(PRICE_SELECTOR).re_first(PRICE_REGEX)
    image_url = selector.css(IMAGE_URL_SELECTOR).re_first(IMAGE_URL_REGEX)
    description = selector.css(DESCRIPTION_SELECTOR).get()
    quantity_available = selector.css(QUANTITY_AVAILABLE_SELECTOR).re_first(
        QUANTITY_REGEX
    )

    description = description[: -len(SUFFIX)].strip()

    print(
        f"Title: {title}",
        f"Price: {price}",
        f"Quantity: {quantity_available}",
        f"Image: {image_url}",
        f"Description: {description}",
        sep="\n"
    )


if __name__ == "__main__":
    get_book_details()
