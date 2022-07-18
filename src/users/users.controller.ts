import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from './users.service';
import {User} from "../entities/user.entity";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }

    @Get()
    getHello(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() user: User): Promise<User> {
        return this.userService.create(user);
    }
}
