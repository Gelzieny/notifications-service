import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateNotificationsBody } from '@infra/http/dtos/create-notication-body';
import { NotificationViewModel } from '../view-models/notification-view-model';
import { CancelNotification } from '@application/user-cases/cancel-notification';
import { ReadNotification } from '@application/user-cases/read-notifications';
import { UnReadNotification } from '@application/user-cases/unread-notifications';
import { CountRecipientNotification } from '@application/user-cases/count-recipient-notifications';
import { GetRecipientNotification } from '@application/user-cases/get-recipient-notifications';
import { SendNotification } from '@application/user-cases/send-notifications';

@Controller('notifications')
export class NotificationController {
  constructor(
    private sendNotificantion: SendNotification,
    private canceldNotificantion: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnReadNotification,
    private countRecipientNotification: CountRecipientNotification,
    private getRecipientNotification: GetRecipientNotification,
  ) { }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    console.log(id)
    await this.canceldNotificantion.execute({
      notificationId: id,
    });
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotification.execute({
      recipientId
    });

    return {
      count
    };
  }

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotification.execute({
      recipientId
    });

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP)
    };
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id,
    });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id,
    });
  }

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
