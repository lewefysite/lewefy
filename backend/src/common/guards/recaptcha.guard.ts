import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import axios from 'axios';

@Injectable()
export class RecaptchaGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const recaptchaToken = request.body.recaptchaToken;

    if (!recaptchaToken) {
      throw new UnauthorizedException('Token do reCAPTCHA ausente.');
    }

    try {
      const response = await axios.post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET}&response=${recaptchaToken}`
      );

      const { success } = response.data;

      if (!success) {
        throw new UnauthorizedException('Falha na verificação do reCAPTCHA.');
      }

      return true;
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro na verificação do reCAPTCHA:', error.message);
      } else {
        console.error('Erro desconhecido na verificação do reCAPTCHA:', error);
      }
      throw new UnauthorizedException('Erro ao verificar o reCAPTCHA.');
    }
  }
}
