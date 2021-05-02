module.exports = (books, order) => books.sort((a, b) => {
  const bookTitleA = a.title.toUpperCase();
  const bookTitleB = b.title.toUpperCase();

  if (order === 'asc') {
    return bookTitleA < bookTitleB ? -1 : bookTitleA > bookTitleB ? 1 : 0;
  }

  return bookTitleA > bookTitleB ? -1 : bookTitleA < bookTitleB ? 1 : 0;
});
