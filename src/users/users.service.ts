import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../entities/user.entity";
import {UserRepository} from "../repositories/user.repository";

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: UserRepository) {
    }

     findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    create(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    findOne(email: string): Promise<User> {
        return this.userRepository.findOneBy({email: email});
    }
}
