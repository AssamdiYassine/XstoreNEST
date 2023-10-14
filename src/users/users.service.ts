import {ForbiddenException, Injectable} from '@nestjs/common';
import {AuthDtoLogin} from "../auth/dto";
import * as argon from "argon2";
import {PrismaService} from "../prisma/prisma.service";
import {User} from "../auth/types";


@Injectable()
export class UsersService {
  constructor(
      private prisma: PrismaService
  ) {}

  async getUser(user: User){
  const users = await this.prisma.user.findUnique({
        where: {
          email: user.email,
        },
      });

      if (!users) throw new ForbiddenException('Access Denied');

      return  users ;
  }
}
