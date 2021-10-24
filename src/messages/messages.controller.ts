import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
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
  findById(@Param("id", ParseIntPipe) id: number) {
    return this.messsagesService.findById(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Post()
  create(@Body() messageDto: MessageDto) {
    return this.messsagesService.create(messageDto);
  }

  @Put(":id")
  update(@Param("id", ParseIntPipe) id: number, @Body() messageDto: MessageDto) {
    return this.messsagesService.update(id, messageDto).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }

  @Delete(":id")
  delete(@Param("id", ParseIntPipe) id: number) {
    return this.messsagesService.delete(id).catch((e) => {
      throw new NotFoundException(e.message);
    });
  }
}
