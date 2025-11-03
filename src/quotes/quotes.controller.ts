import { CreateQuotesDto } from './dto/create-quotes.dto';
/* eslint-disable prettier/prettier */

import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { UpdateQuotesDto } from './dto/update-quotes.dto';
import { NotFoundError } from 'rxjs';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) { }

  @Post()
  create(@Body() quote: CreateQuotesDto): CreateQuotesDto[] {
    return this.quotesService.create(quote);
  }

  @Get()
  findAll() {
    return this.quotesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.quotesService.findOne(id);
    } catch (error) {
      return error instanceof Error ? error : "server err"

    }
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateQuotesDto: UpdateQuotesDto) {
    return this.quotesService.update(id, updateQuotesDto);
  }

  @Delete(":id")
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.quotesService.delete(id);
  }
}
