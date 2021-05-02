module.exports = (books, order) => books.sort((a, b) => {
  const bookCreationDateA = a.createdAt;
  const bookCreationDate = b.createdAt;

  if (order === 'asc') {
    return bookCreationDateA < bookCreationDate ? -1 : bookCreationDateA > bookCreationDate ? 1 : 0;
  }

  return bookCreationDateA > bookCreationDate ? -1 : bookCreationDateA < bookCreationDate ? 1 : 0;
});
