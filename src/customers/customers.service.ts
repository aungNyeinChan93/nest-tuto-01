import { Customer, customers } from './customers';
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {

    private customers: Customer[] = customers;

    findAll({ name, type }: { name: string, type: 'silver' | 'gold' | 'platinum' }) {
        if (name || type) {
            let res: Customer[] | Customer | undefined = [];
            res = type && this.customers.filter(customer => customer?.type == type);

            if (name != '') {
                res = res ? res?.find(customer => customer?.name === name) : this.customers?.find(customer => customer?.name === name)
            }

            return res;
        };

        return this.customers;
    }

    create(customer: Customer): Customer[] {
        const newCustomer = { ...customer, id: this.customers?.length + 1, age: Number(customer?.age) }
        this.customers.push(newCustomer);
        return this.customers;
    }

    findOne(customerId: number): Customer | undefined {
        return this.customers.find(customer => customer?.id === customerId)
    }

    update(id: number, updateCustomer: Partial<Customer>): Customer[] {
        return this.customers?.map(customer => customer?.id === id ? { ...customer, ...updateCustomer } : customer)
    }

    delete(id: number): Customer[] | { message: string } {
        const hasCustomer = this.customers.find(customer => customer?.id === id)
        if (!hasCustomer) {
            return { message: 'not found customer' }
        }
        return this.customers.filter(customer => customer?.id !== id);
    }
}
