const bookRepository = require('../repositories/booksRepository')

class GetBookByIdUseCase {
    async execute(id) {
        const book = await bookRepository.findById(id)

        if (!book) {
            const error = new Error('Запись не найдена');
            error.status = 404;
            throw error;
        }

        return book
    }
}

module.exports = new GetBookByIdUseCase();