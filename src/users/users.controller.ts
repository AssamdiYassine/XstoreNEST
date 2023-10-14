import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ForbiddenException,
  HttpCode,
  HttpStatus, UseGuards
} from '@nestjs/common';
import { UsersService } from './users.service';
import {GetCurrentUser, Public} from "../common/decorators";
import {Tokens, User} from "../auth/types";
import * as argon from "argon2";
import {AuthDtoLogin} from "../auth/dto";
import {PrismaService} from "../prisma/prisma.service";
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import {AtGuard} from "../common/guards";


@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}


  @Get('user')
  @UseGuards(AtGuard)
  @HttpCode(HttpStatus.OK)
  getMe(@GetCurrentUser() user: User) {
    return this.usersService.getUser(user);
  }



  // @Get(':userId/detail')
  // userDetail() {
  //   return this.usersService.userDetail();
  // }

}
