import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import { ERRORS } from '../validator/errors';
import { verify } from '../helpers/password';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findUnique({ where: { email: email } });

    if (!user) {
      throw new NotFoundException(ERRORS.NOT_FOUND);
    }

    const isPasswordValid = await verify(password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException(ERRORS.UNAUTHORIZED);
    }

    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}
