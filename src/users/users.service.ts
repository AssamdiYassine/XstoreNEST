import { Injectable } from '@nestjs/common';


@Injectable()
export class UsersService {

  userDetail() {
    return `This action returns all users`;
  }

}
