import {Body, Controller, Get, Post, Req, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from "../entities/user.entity";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import { Request } from 'express';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getUsers(@Req() request: Request): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }
}
