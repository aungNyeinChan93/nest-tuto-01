/* eslint-disable prettier/prettier */

import { type Customer } from './customers';
import { CustomersService } from './customers.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
    constructor(private readonly customersServices: CustomersService) { }

    @Get()
    findAll(@Query() query: { name: string, type: 'gold' | 'silver' | 'platinum' }) {
        return this.customersServices.findAll({ ...query });
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.customersServices.findOne(id);
    }

    @Post()
    create(@Body() customer: Customer) {
        return this.customersServices.create(customer);
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() customer: Partial<Customer>) {
        // return { id, ...customer }
        return this.customersServices.update(id, customer)
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.customersServices.delete(+id);
    }

}
