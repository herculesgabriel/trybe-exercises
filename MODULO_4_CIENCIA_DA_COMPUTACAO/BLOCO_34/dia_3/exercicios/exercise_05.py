from pymongo import MongoClient


def get_books_by_category(category: str):
    with MongoClient() as client:
        db = client.library

        books = db.books.find({"categories": category}, projection=["title"])

        print(f"Books found from category {category}:", end="\n\n")

        for book in books:
            print(book["title"])

        print()


def count_published_books_by_category():
    with MongoClient() as client:
        db = client.library

        # published_books = db.books.aggregate(
        #     [
        #         {"$match": {"status": "PUBLISH"}},
        #         {"$unwind": "$categories"},
        #         {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
        #         {"$sort": {"$count": -1}},
        #     ]
        # )

        # for category in published_books:
        #     category_id = category["id"]
        #     category_count = category["count"]

        #     print(f"{category_id} {category_count}")

        published_books = db.books.find({"status": "PUBLISH"})

        books_by_category = {}

        for book in published_books:
            for category in book["categories"]:
                if not books_by_category.get(category):
                    books_by_category[category] = 0
                books_by_category[category] += 1

        books_list = list(books_by_category.items())
        books_list.sort(key=lambda category: category[1], reverse=True)

        print("Quantity of books by category:", end="\n\n")

        for book in books_list:
            print(book[0], book[1])

        print()


if __name__ == "__main__":
    get_books_by_category("Web Development")
    count_published_books_by_category()
