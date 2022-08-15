import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { UserDto } from './dtos/UserDto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository: UserRepository) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: UserDto): Promise<User> {
    if (await this.userExists(user.email)) {
      throw new HttpException('User already exist', HttpStatus.BAD_REQUEST);
    }

    return this.userRepository.save(user);
  }

  private userExists(email): Promise<User> {
    return this.userRepository.findOneBy({ email: email });
  }

  findOne(email: string): Promise<User> {
    return this.userRepository.findOneBy({ email: email, isActive: true });
  }

  findUserForLogin(email: string): Promise<User> {
    return this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email: email })
      .where('user.isActive = :isActive', { isActive: true })
      .addSelect('user.password')
      .getOne();
  }
}
