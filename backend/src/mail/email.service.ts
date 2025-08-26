import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  async sendMail(to: string, subject: string, html: string) {
    try {
      await this.transporter.sendMail({
        from: `"Equipe" <${process.env.SMTP_USER}>`,
        to,
        subject,
        html,
      });
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao enviar e-mail:', error.message);
      } else {
        console.error('Erro desconhecido ao enviar e-mail:', error);
      }
    }
  }
}
