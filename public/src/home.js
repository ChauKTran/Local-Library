function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let booksBorrowedCount = books.filter((book) => book.borrows[0].returned == false);
  return booksBorrowedCount.length;
}
// use reduce to take out the genres and count the genres;
/* right now we have genreCount = {
genre : count
}
*/
//after that use Object.keys and map to create a new array that like a result
//sort to arrange
function getMostCommonGenres(books) {
  const genreCount = books.reduce((total, book) => {
       if (total[book.genre]) {
         total[book.genre]++;
       } else {
         total[book.genre] = 1;
       }
    return total;
},{});
  const commonGenres = Object.keys(genreCount).map((genre) => ({
    name: genre,
    count: genreCount[genre]
  }));
  
  commonGenres.sort((a, b) => b.count - a.count);                           
  return commonGenres.slice(0,5)
}

function getMostPopularBooks(books) {
  const bookBorrowCounts = books.map(book => ({
    name: book.title,
    count: book.borrows.length
  }));
  const result = bookBorrowCounts.sort((a,b) => b.count - a.count);
  return result.slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  const authorCounts = books.map(book => {
    const author = authors.find((author) => author.id === book.authorId)
    const name = `${author.name.first} ${author.name.last}`
    return {name: name, count: book.borrows.length}
  });
  authorCounts.sort((a, b) => a.count < b.count ? 1 : -1);
  return authorCounts.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
