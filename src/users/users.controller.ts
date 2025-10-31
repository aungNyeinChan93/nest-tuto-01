/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    findAll() {
        return this.userService.getUsers();
    }

    @Get('admin')
    allAdmin() {
        return 'all admins';
    }

    @Get('fetch')
    async fetchUsers() {
        const users = await this.userService.fetchAllUsers();
        return users;
    }

    @Get(':name')
    getUserByName(@Param('name') name: string) {
        return this.userService.getUserByName(name)
    }

    @Post()
    hi() {
        return this.userService.getUsers();
    }


}
