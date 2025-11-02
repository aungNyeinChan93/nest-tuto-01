/* eslint-disable prettier/prettier */


export type Customer = {
    id?: number;
    name: string;
    email: string;
    age: number | string;
    type: "gold" | 'silver' | "platinum"
}


export const customers: Customer[] = [
    { id: 1, name: 'susu', email: 'susu@gmail.com', type: 'gold', age: 22 },
    { id: 2, name: 'koko', email: 'koko@gmail.com', type: 'silver', age: 22 },
    { id: 3, name: 'mgmg', email: 'mgmg@gmail.com', type: 'gold', age: 22 },
    { id: 4, name: 'tuntun', email: 'tuntun@gmail.com', type: 'platinum', age: 22 },
]