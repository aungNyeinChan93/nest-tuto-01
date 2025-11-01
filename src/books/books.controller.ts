/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { type Book } from 'src/db/books';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) { }

    @Get()
    findAll(@Query('name') name?: string): Book[] {
        return this.booksService.getAllBooks(name || undefined);
    }

    @Get(':name')
    getBook(@Param('name') name: string) {
        return this.booksService.getBook(name)
    }

    @Post()
    createBook(@Body() body: Book): Book | { message: string } {
        try {
            return this.booksService.createBook(body)
        } catch (error) {
            const message = error instanceof Error ? error?.message : 'book create fail!'
            return { message }
        }
    }

    @Put(':title')
    updateBook(@Param('title') title: string, @Body() book: Book): Book | undefined {
        return this.booksService.updateBook(title, book)
    }

    @Delete(":title")
    deleteBook(@Param('title') title: string): Book[] {
        return this.booksService.deleteBook(title)
    }


}
