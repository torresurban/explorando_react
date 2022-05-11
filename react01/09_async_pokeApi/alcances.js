//async/await
async getBooksByAuthorWithAsyncAwait(authorId) {
    const books = await bookModel.fetchAll()
    return books.filter(book => book.authorId === authorId)
}

//promise
getBooksByAuthorWithPromise(authorId) {
    return bookModel.fetchAll()
    .then(books => books.filter(book => book.authorId === authorId))
}