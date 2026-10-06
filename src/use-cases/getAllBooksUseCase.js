const bookRepository = require('../repositories/booksRepository')

class GetAllBooksUseCase {
    async execute() {
        const books = await bookRepository.findAll()

        return books
    }
}

module.exports = new GetAllBooksUseCase();