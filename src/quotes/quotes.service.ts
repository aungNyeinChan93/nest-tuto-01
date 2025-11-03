/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuotesDto } from './dto/create-quotes.dto';
import { UpdateQuotesDto } from './dto/update-quotes.dto';

@Injectable()
export class QuotesService {
    private quotes: CreateQuotesDto[] = [];

    findAll() {
        return this.quotes;
    }

    findOne(id: number) {
        const quote = this.quotes?.find(q => q?.id === id)
        if (!quote) {
            throw new NotFoundException('Quote not found');
        };
        return quote
    }


    create(quote: CreateQuotesDto): CreateQuotesDto[] {
        const newQuote = { ...quote, id: this.quotes.length + 1 }
        this.quotes.push(newQuote);
        return this.quotes
    }

    update(id: number, updateQuotesDto: UpdateQuotesDto) {
        return this.quotes.map(quote => quote?.id === id ? { ...quote, ...updateQuotesDto } : quote)
    }

    delete(id: number) {
        this.quotes = this.quotes.filter(q => q.id !== id);
        return this.quotes;

    }
}
