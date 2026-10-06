const booksDB = []

class BooksRepository {
    async saveBook(book) {
        booksDB.push(book)
        return book
    }

    async findAll() {
        return booksDB
    }

    async findById(id) {
        return booksDB.find((book) => book.id === id)
    }

    async delete(id) {
        const index = booksDB.findIndex(book => book.id === id)

        if (!index) {
            return false
        }

        booksDB.splice(index, 1)
        return true
    }
}


module.exports = new BooksRepository()