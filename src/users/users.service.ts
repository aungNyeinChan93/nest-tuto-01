/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';



interface User {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: Hair;
    ip: string;
    address: Address;
    macAddress: string;
    university: string;
    bank: Bank;
    company: Company;
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: Crypto;
    role: string;
}

interface Hair {
    color: string;
    type: string;
}

interface Address {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: Coordinates;
    country: string;
}

interface Coordinates {
    lat: number;
    lng: number;
}

interface Bank {
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

interface Company {
    department: string;
    name: string;
    title: string;
    address: Address;
}

interface Crypto {
    coin: string;
    wallet: string;
    network: string;
}


@Injectable()
export class UsersService {


    greeting() {
        return 'Hello from user route => /users';
    }

    getUsers() {
        return [
            { name: 'Alice Johnson', email: 'alice.johnson@example.com', password: 'Passw0rd!' },
            { name: 'Bob Smith', email: 'bob.smith@example.com', password: 'qwerty123' },
            { name: 'Carol Nguyen', email: 'carol.nguyen@example.com', password: 'Secur3Pa$$' },
            { name: 'David Lee', email: 'david.lee@example.com', password: 'MyP@ssw0rd' },
            { name: 'Emma Davis', email: 'emma.davis@example.com', password: 'emma2025!' },
            { name: 'Frank Wilson', email: 'frank.wilson@example.com', password: 'Frank#123' },
            { name: 'Grace Harris', email: 'grace.harris@example.com', password: 'Gr@ce2025' },
            { name: 'Henry Clark', email: 'henry.clark@example.com', password: 'henry_pw1' },
            { name: 'Irene Scott', email: 'irene.scott@example.com', password: 'Irene!2025' },
            { name: 'Jack Miller', email: 'jack.miller@example.com', password: 'JackMiller99' },
            { name: 'chan', email: 'jack.miller@example.com', password: 'JackMiller99' },
        ]
    }

    getUser() {
        return { name: 'Alice Johnson', email: 'alice.johnson@example.com', password: 'Passw0rd!' }
    };

    getUserByName(name: string) {
        return this.getUsers().filter(user => user.name === name)[0];
    }

    async fetchAllUsers() {
        const response = await fetch('https://dummyjson.com/users');
        const { users } = await response.json();
        return users;

    }
}
