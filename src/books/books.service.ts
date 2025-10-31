/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Book, books } from 'src/db/books';

@Injectable()
export class BooksService {
    private books: Book[] = books;
    getAllBooks(name?: string): Book[] {
        if (name) {
            return this.books.filter(book => book?.title == name)
        }
        return this.books
    }
}
