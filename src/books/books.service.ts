/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { type Book, books } from 'src/db/books';

@Injectable()
export class BooksService {
    private books: Book[] = books;
    getAllBooks(name?: string): Book[] {
        if (name) {
            return this.books.filter(book => book?.title == name)
        }
        return this.books
    }

    getBook(title: string): Book | undefined {
        return this.books.find(book => book?.title === title)
    }

    createBook(book: Book): Book {
        const newBook = {
            ...book
        };

        this.books = [...this.books, newBook];

        return newBook
    }

    updateBook(title: string, updateBook: Book): Book | undefined {
        this.books = this.books.map(book => book?.title === title ? { ...book, ...updateBook } : book)
        return this.getBook(updateBook?.title ?? title)
    };


    deleteBook(title: string) {
        return this.books.filter(book => book?.title !== title)
    }

}
