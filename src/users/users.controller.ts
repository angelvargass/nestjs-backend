import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from "../entities/user.entity";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {UserDto} from "../dtos/UserDto";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    async create(@Body() user: UserDto): Promise<User> {
        return this.userService.create(user);
    }
}
