import { IsString, IsEmail, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsEmail({}, { message: 'Por favor, forneça um endereço de e-mail válido.' })
  email!: string;

  @IsString()
  name!: string;

  @IsString()
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres.' })
  password!: string;
}
