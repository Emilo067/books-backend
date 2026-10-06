const createBookUseCase = require('../use-cases/createBookUseCase');
const getAllBooksUseCase = require('../use-cases/getAllBooksUseCase');
const getBookByIdUseCase = require('../use-cases/getBookByIdUseCase');

class BookController {
    async createBook(req, res) {
        try {
            // Извлекаем данные из тела запроса
            const bookData = req.body;

            // Передаем в слой бизнес-логики
            const book = await createBookUseCase.execute(bookData);

            // Возвращаем ответ
            res.status(201).json(book);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    async getAllBooks(_, res) {
        try {
            const books = await getAllBooksUseCase.execute()

            res.status(200).json(books)
        } catch (error) {
            res.status(500).json({error: 'Internal Server Error'})
        }
    }

    async getBookById(req, res) {
        try {
            const id = req.params.id
            const book = await getBookByIdUseCase.execute(id)

            res.status(200).json(book)
        } catch (error) {
            const statusCode = error.status || 500
            res.status(statusCode).json({error: error.message || 'Internal Server Error'})
        }
    }
}

module.exports = new BookController();