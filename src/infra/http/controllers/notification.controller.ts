import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '@application/user-cases/send-notifications';
import { CreateNotificationsBody } from '@infra/http/dtos/create-notication-body';
import { NotificationViewModel } from '../view-models/notification-view-model';

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

    return {
      notification: NotificationViewModel.toHTTP(notification)
    };
  }
}
