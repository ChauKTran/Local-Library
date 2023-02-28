function findAccountById(accounts, id) {
  for ( let i = 0; i< accounts.length; i++) {
    if (accounts[i].id === id) {
      return accounts[i];
    }
  }
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((acc1, acc2) => acc1.name.last > acc2.name.last? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  return books.reduce((acc, book) => {
    const borrows = book.borrows;
    const count = borrows.filter(borrow => borrow.id === accountId);
    return acc + count.length;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
    const accountBooks = books.filter(book => {
      const lastBorrow = book.borrows[0];
      return lastBorrow.id === account.id && !lastBorrow.returned;
    });
  for (const book of accountBooks) {
    const author = authors.find(author => author.id === book.authorId);
    book.author = author;
  }
  return accountBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
