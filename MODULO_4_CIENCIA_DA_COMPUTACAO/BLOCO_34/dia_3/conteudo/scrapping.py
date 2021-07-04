import requests
from parsel import Selector

selectors = {
    "title": "h3 a::attr(title)",
    "price": ".product_price .price_color::text",
    "details": "h3 a::attr(href)",
    "description": "#product_description ~ p::text",
    "next": ".next a::attr(href)",
}


def get_books(pages_quantity: int):
    URL_BASE = "http://books.toscrape.com/catalogue/"
    next_page_url = "page-1.html"
    current_page = 0
    books = []

    while next_page_url and current_page <= pages_quantity:
        current_page += 1

        response = requests.get(URL_BASE + next_page_url)
        selector = Selector(text=response.text)

        for product in selector.css(".product_pod"):
            detail_href = product.css(selectors["details"]).get()

            detail_response = requests.get(URL_BASE + detail_href)
            detail_selector = Selector(text=detail_response.text)

            description = detail_selector.css(selectors["description"]).get()
            title = product.css(selectors["title"]).get()
            price = product.css(selectors["price"]).re(r"£\d+\.\d{2}")[0]

            suffix = "...more"
            if description.endswith(suffix):
                description = description[: -len(suffix)]

            book = dict(title=title, price=price, description=description)
            books.append(book)

        next_page_url = selector.css(selectors["next"]).get()

    return books


if __name__ == "__main__":
    books = get_books(pages_quantity=1)
    print(books)
