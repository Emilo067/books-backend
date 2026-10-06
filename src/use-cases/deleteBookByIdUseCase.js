const bookRepository = require("../repositories/booksRepository");

class DeleteBookByIdUseCase {
    async execute(id) {
        const deleted = bookRepository.delete(id)

        if(!deleted) {
            const error = new Error('Запись не найдена')
            error.status = 404
            throw error
        }

        return 'ok'
    }
}