import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { NoticationNotFound } from "./errors/notication-not-found";

interface CancelNotificationRequest {
    notificationId: string;
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {
    constructor(private notificationsRepository: NotificationsRepository) { }

    async execute(request: CancelNotificationRequest): Promise<CancelNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationsRepository.finById(notificationId);

        if (!notification) {
            throw new NoticationNotFound();
        }

        notification.cancel();

        await this.notificationsRepository.save(notification)

    }
}