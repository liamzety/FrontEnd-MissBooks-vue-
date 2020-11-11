import { bookService } from '@/service/bookService.js';


export default {
    state: {
        books: null,
    },
    getters: {
        booksToShow(state) {
            const books = state.books
            return books
        }
    },
    mutations: {
        setBooks(state, { books }) {
            state.books = books
        },
    },
    actions: {
        async loadBooks(context, { query }) {
            const books = await bookService.query(query)
            context.commit({ type: 'setBooks', books })
        },
        async searchBooks(context, { query }) {
            const books = await bookService.searchBooks(query)
            return books
        },
        async addBook(context, { book }) {
            const books = await bookService.saveBook(book)
            context.commit({ type: 'setBooks', books })
        },
        async addReview(context, { bookId, review }) {
            const { bookReviewed, books } = await bookService.addReview(bookId, review)
            context.commit({ type: 'setBooks', books })
            return bookReviewed
        }

    },
    modules: {}
}