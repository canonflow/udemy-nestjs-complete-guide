import { readFile } from 'fs/promises';

export class MessageRepository {
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf8');
    const message = JSON.parse(content);
    return message[id];
  }
  async findAll() {}
  async create(message: string) {}
}
