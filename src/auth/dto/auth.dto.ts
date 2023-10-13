import {isBoolean, isEmail, IsNotEmpty, IsString} from 'class-validator';

export class AuthDtoRegistration {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password1: string;

  @IsNotEmpty()
  @IsString()
  password2: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  firstName: string;


  @IsNotEmpty()
  @IsString()
  birthdate: string;

  @IsNotEmpty()
  @IsString()
  home_country: string;

  @IsNotEmpty()
  @IsString()
  gender: string;


  has_accepted_conds: Boolean;


}
export class AuthDtoLogin {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;



}
