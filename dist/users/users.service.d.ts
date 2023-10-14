import { PrismaService } from "../prisma/prisma.service";
import { User } from "../auth/types";
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    getUser(user: User): Promise<import(".prisma/client").User>;
}
