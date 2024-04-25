import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async register({ name, email, password }: RegisterDto) {
    const userExists = await this.usersService.findOneByEmail(email);
    if (userExists) throw new BadRequestException('user already exists');

    return await this.usersService.create({ name, email, password });
  }

  login() {
    return { message: 'login' };
  }
}
