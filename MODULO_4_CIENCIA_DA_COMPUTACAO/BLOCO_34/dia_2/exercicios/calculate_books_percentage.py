import json
import csv


def read_json_data():
    with open("books_list.json") as file:
        books = json.load(file)

        return books


def get_category_count():
    books = read_json_data()

    categories = {}

    for book in books:
        for category in book["categories"]:
            if category not in categories:
                categories[category] = 1
            else:
                categories[category] += 1

    books_quantity = len(books)

    for category in categories:
        categories[category] /= books_quantity

    return categories


def save_category_results(results):
    with open("categories_count.csv", mode="w") as file:
        headers = ["categoria", "porcentagem"]

        writer = csv.writer(file)

        writer.writerow(headers)

        for category, percentage in results.items():
            writer.writerow([category, percentage])


results = get_category_count()
save_category_results(results)
