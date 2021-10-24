import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { Message } from "./Message";
import { MessageDto } from "./MessageDto";
import { MessagesService } from "./messages.service";

@Controller("messages")
export class MessagesController {
  constructor(private messsagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messsagesService.findAll();
  }
  @Get(":id")
  findById(@Param() params) {
    return this.messsagesService.findById(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    return this.messsagesService.create(messageDto);
  }

  @Put(":id")
  update(@Param() params, @Body() messageDto: MessageDto) {
    return this.messsagesService.update(+params.id, messageDto).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(":id")
  delete(@Param() params) {
    return this.messsagesService.delete(+params.id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
