import { AuthService } from './auth.service';
import { AuthDtoLogin, AuthDtoRegistration } from './dto';
import { Tokens } from './types';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signupLocal(dto: AuthDtoRegistration): Promise<Tokens>;
    signinLocal(dto: AuthDtoLogin): Promise<Tokens>;
    logout(userId: number): Promise<boolean>;
    refreshTokens(userId: number, refreshToken: string): Promise<Tokens>;
}
