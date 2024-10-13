import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { NoticationNotFound } from "./errors/notication-not-found";

interface UnReadNotificationRequest {
    notificationId: string;
}

type UnReadNotificationResponse = void;

@Injectable()
export class UnReadNotification {
    constructor(private notificationsRepository: NotificationsRepository) { }

    async execute(request: UnReadNotificationRequest): Promise<UnReadNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationsRepository.finById(notificationId);

        if (!notification) {
            throw new NoticationNotFound();
        }

        notification.unread();

        await this.notificationsRepository.save(notification)
    }
}