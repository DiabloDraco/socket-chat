import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { MessagesService } from './messages.service';
import { UpdateMessageDto } from './dto/update-message.dto';

@WebSocketGateway({ cors: '*' })
export class MessagesGateway {
  constructor(private readonly messagesService: MessagesService) {}
  @WebSocketServer() server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log(this.server);

    this.server.emit('message', message);
  }

  @SubscribeMessage('findAllMessages')
  findAll() {
    return this.messagesService.findAll();
  }

  @SubscribeMessage('findOneMessage')
  findOne(@MessageBody() id: number) {
    return this.messagesService.findOne(id);
  }

  @SubscribeMessage('updateMessage')
  update(@MessageBody() updateMessageDto: UpdateMessageDto) {
    return this.messagesService.update(updateMessageDto.id, updateMessageDto);
  }

  @SubscribeMessage('removeMessage')
  remove(@MessageBody() id: number) {
    return this.messagesService.remove(id);
  }
}
