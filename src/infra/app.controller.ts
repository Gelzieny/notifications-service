import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto'
import { PrismaService } from './prisma.service';
import { CreateNotificationsBody } from './create-notication-body';


@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getList() {
    return  this.prisma.notification.findMany();
  }

  @Post()
  async createNotifications(@Body() body: CreateNotificationsBody) {
    const {content, category, recipientId} = body;

    await this.prisma.notification.create({
      data:{
        id: randomUUID(),
        content,
        category,
        recipientId
      }
    })
  }
}
