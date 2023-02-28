function findAuthorById(authors, id) {
  for (let i = 0; i< authors.length; i++) {
    if ( authors[i].id == id) {
      return authors[i];
    }
  }
}

function findBookById(books, id) {
  for (let i = 0; i< books.length; i++) {
    if ( books[i].id == id) {
      return books[i];
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let borrow = [];
  let retur = [];
  for (let i = 0; i< books.length; i++) {
    const book = books[i];
    const { borrows } = book;
    const isBorrowed = borrows.every(borrow => borrow.returned == true);
    if(!isBorrowed) {
      borrow.push(book)
    } else {
      retur.push(book)
    }
  };
      return [borrow,retur];
}

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;
  const borrowers = borrows.map(borrow =>{
    const account = accounts.find(acc => acc.id === borrow.id);
    return {
      ...borrow,...account
    };
  });
  return borrowers.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
