import {Body, Controller, Get, NotFoundException, Param, Post,} from '@nestjs/common';
import {CreateMessageDto} from './dtos/create-message.dto';
import {MessageService} from './message.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessageService;

  constructor() {
    // DON'T DO THIS ON REAL APPS
    // USE DEPENDENCY INJECTION
    this.messagesService = new MessageService();
  }

  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);

    if (!message) {
      throw new NotFoundException('Message does not exist');
    }

    return message;
  }
}
