import { Injectable, CanActivate, ExecutionContext, BadRequestException, ForbiddenException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RecaptchaGuard implements CanActivate {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const { recaptchaToken } = request.body;

    if (!recaptchaToken) {
      throw new BadRequestException('O token do reCAPTCHA é necessário.');
    }

    const secretKey = this.configService.get<string>('RECAPTCHA_SECRET_KEY');
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify`;

    try {
      const response = await firstValueFrom(
        this.httpService.post(verificationUrl, null, {
          params: {
            secret: secretKey,
            response: recaptchaToken,
          },
        }),
      );

      const { success, score } = response.data;

      // Verificamos se o Google confirmou o token E se a pontuação é aceitável (maior que 0.5)
      if (!success || score < 0.5) {
        throw new ForbiddenException('Falha na verificação humana. Por favor, tente novamente.');
      }

      // Se passou, a requisição pode continuar
      return true;

    } catch (error) {
      // Log do erro real para depuração
      console.error('Erro na validação do reCAPTCHA:', error.message);
      throw new ForbiddenException('Não foi possível verificar o reCAPTCHA.');
    }
  }
}