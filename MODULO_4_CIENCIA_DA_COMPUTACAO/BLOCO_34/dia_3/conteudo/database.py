from pymongo import MongoClient


def save_books(books: list):
    with MongoClient() as client:
        db = client.catalogue

        db.books.insert_many(books)
