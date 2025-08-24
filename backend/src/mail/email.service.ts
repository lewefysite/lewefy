import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import * as nodemailer from 'nodemailer';

// Interface para a resposta da API de verificação que você forneceu
interface EmailVerificationResponse {
  result: 'valid' | 'invalid' | 'risky' | 'unknown';
  details: string;
  did_you_mean?: string;
  success: boolean;
}

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    // Configura o Nodemailer para usar o Resend (ou outro provedor)
    this.transporter = nodemailer.createTransport({
      host: 'smtp.resend.com',
      secure: true,
      port: 465,
      auth: {
        user: 'resend',
        pass: this.configService.get<string>('RESEND_API_KEY'),
      },
    });
  }

  /**
   * Passo 1: Verifica um endereço de e-mail usando uma API externa.
   */
  async verifyEmailAddress(email: string): Promise<boolean> {
    // SUBSTITUA PELA URL REAL DA SUA API DE VERIFICAÇÃO
    const verificationApiUrl = `https://api.example-verifier.com/v1/verify?email=${email}`;
    const apiKey = this.configService.get<string>('EMAIL_VERIFIER_API_KEY'); // Adicione esta chave ao seu .env

    try {
      const response = await firstValueFrom(
        this.httpService.get<EmailVerificationResponse>(verificationApiUrl, {
          headers: { 'Authorization': `Bearer ${apiKey}` },
        }),
      );

      const { result, did_you_mean } = response.data;

      if (result === 'invalid' || result === 'risky') {
        let message = `O endereço de e-mail '${email}' não é válido.`;
        if (did_you_mean) {
          message += ` Você quis dizer '${did_you_mean}'?`;
        }
        throw new BadRequestException(message);
      }
      
      // Permite 'valid' e 'unknown' para não bloquear usuários caso a API falhe
      return true;

    } catch (error) {
      this.logger.error('Falha ao verificar e-mail com API externa:', error.message);
      // Em caso de falha da API, permitimos o registro para não bloquear o usuário.
      // Você pode querer mudar essa lógica para ser mais restrita.
      return true;
    }
  }

  /**
   * Passo 2: Envia o e-mail de confirmação com o link.
   */
  async sendConfirmationEmail(userEmail: string, token: string) {
    const frontendUrl = this.configService.get<string>('FRONTEND_URL');
    const confirmationUrl = `${frontendUrl}/confirm-email?token=${token}`;
    
    const mailOptions = {
      from: `Lewefy <${this.configService.get<string>('MAIL_FROM')}>`,
      to: userEmail,
      subject: 'Confirme seu E-mail - Lewefy',
      html: `
        <div style="font-family: sans-serif; text-align: center; padding: 20px;">
          <h2>Bem-vindo(a) ao Lewefy!</h2>
          <p>Por favor, clique no botão abaixo para confirmar seu endereço de e-mail e ativar sua conta.</p>
          <a href="${confirmationUrl}" 
             style="background-color: #f7902b; color: white; padding: 15px 25px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 10px;">
            Confirmar E-mail
          </a>
          <p style="margin-top: 20px;">Se você não se cadastrou no Lewefy, por favor ignore este e-mail.</p>
        </div>
      `,
    };

    await this.transporter.sendMail(mailOptions);
    this.logger.log(`E-mail de confirmação enviado para ${userEmail}`);
  }
}