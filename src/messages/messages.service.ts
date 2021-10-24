import { Injectable } from "@nestjs/common";
import { Message } from "./Message";
import { MessageDto } from "./MessageDto";

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: 1,
      text: "Primeira mensagem",
    },
    {
      id: 2,
      text: "Segunda mensagem",
    },
  ];

  findAll() {
    console.log(this.messages);

    return this.messages.filter(Boolean);
  }

  async findById(id: number) {
    const message = this.messages.find((message) => message?.id === id);

    if (!message) {
      throw Error(`Mensagem com o ID ${id} não encontrada.`);
    }
  }

  create(messsageDto: MessageDto) {
    const id = this.messages.length + 1;

    const message: Message = {
      id,
      ...messsageDto,
    };
    this.messages.push(message);

    console.log(message);

    return message;
  }

  async update(id: number, messageDto: MessageDto) {
    console.log(id);

    const index = this.messages.findIndex((message) => message?.id === id);

    console.log(index);

    if (index == -1) {
      throw Error(`Mensagem com o ID ${id} não encontrada.`);
    }

    const message: Message = {
      id,
      ...messageDto,
    };

    this.messages[index] = message;

    return message;
  }
  async delete(id: number) {
    const index = this.messages.findIndex((message) => message?.id === id);

    if (index == -1) {
      throw Error(`Mensagem com o ID ${id} não encontrada.`);
    }

    delete this.messages[index];

    return true;
  }
}
