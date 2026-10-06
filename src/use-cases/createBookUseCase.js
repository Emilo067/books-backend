const Book = require('../domain/Book')
const bookRepository = require('../repositories/booksRepository')

class CreateBookUseCase {
    async execute(bookData) {
        const newBook = new Book(bookData)

        const savedBook = await bookRepository.saveBook(newBook)

        return savedBook
    }
}

module.exports = new CreateBookUseCase()