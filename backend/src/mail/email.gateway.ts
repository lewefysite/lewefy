import {
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EmailGateway {
  @WebSocketServer()
  server: Server;

  emitEmailStatus(to: string, status: 'success' | 'error') {
    this.server.emit('emailStatus', {
      to,
      status,
      timestamp: new Date().toISOString(),
    });
  }
}
