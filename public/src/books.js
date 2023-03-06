function findAuthorById(authors, id) {
  return authors.find((author) => author.id == id);
}

function findBookById(books, id) {
  return books.find((book) => book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrow = [];
  let result = [];
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const { borrows } = book;
    const isBorrowed = borrows.every((borrow) => borrow.returned == true);
    if (!isBorrowed) {
      borrow.push(book);
    } else {
      result.push(book);
    }
  }
  return [borrow, result];
}

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;
  const borrowers = borrows.map((borrow) => {
    const account = findAuthorById(accounts, borrow.id);
    return {
      ...borrow,
      ...account,
    };
  });
  return borrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
