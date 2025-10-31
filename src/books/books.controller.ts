/* eslint-disable prettier/prettier */
import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from 'src/db/books';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) { }

    @Get()
    findAll(@Query('name') name?: string): Book[] {
        return this.booksService.getAllBooks(name || undefined);
    }
}
