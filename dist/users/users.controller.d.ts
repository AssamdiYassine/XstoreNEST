import { UsersService } from './users.service';
import { User } from "../auth/types";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getMe(user: User): Promise<import(".prisma/client").User>;
}
