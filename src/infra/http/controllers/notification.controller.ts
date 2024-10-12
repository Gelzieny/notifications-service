import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/user-cases/send-notifications';
import { CreateNotificationsBody } from 'src/infra/http/dtos/create-notication-body';

@Controller('notifications')
export class NotificationController {
  constructor(private sendNotificantion: SendNotification) { }

  @Post()
  async createNotifications(@Body() body: CreateNotificationsBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotificantion.execute({
      recipientId,
      content,
      category
    });

    return { notification };
  }
}
