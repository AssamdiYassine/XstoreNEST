import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDtoLogin, AuthDtoRegistration } from './dto';
import { Tokens } from './types';
export declare class AuthService {
    private prisma;
    private jwtService;
    private config;
    constructor(prisma: PrismaService, jwtService: JwtService, config: ConfigService);
    signupLocal(dto: AuthDtoRegistration): Promise<Tokens>;
    signinLocal(dto: AuthDtoLogin): Promise<{
        user: import(".prisma/client").User;
        access_token: string;
        refresh_token: string;
    }>;
    user(dto: AuthDtoLogin): Promise<{
        user: import(".prisma/client").User;
        access_token: string;
        refresh_token: string;
    }>;
    logout(userId: number): Promise<boolean>;
    refreshTokens(userId: number, rt: string): Promise<Tokens>;
    updateRtHash(userId: number, rt: string): Promise<void>;
    getTokens(userId: number, email: string): Promise<Tokens>;
}
