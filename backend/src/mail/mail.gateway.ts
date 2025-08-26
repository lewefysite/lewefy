import { WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class MailGateway {
  // Gateway vazio — pronto pra receber eventos WebSocket futuramente
}
