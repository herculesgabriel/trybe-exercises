from database import save_books
from scrapping import get_books

books = get_books(pages_quantity=2)
save_books(books)
