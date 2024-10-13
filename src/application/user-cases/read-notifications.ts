import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { NoticationNotFound } from "./errors/notication-not-found";

interface ReadNotificationRequest {
    notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
    constructor(private notificationsRepository: NotificationsRepository) { }

    async execute(request: ReadNotificationRequest): Promise<ReadNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationsRepository.finById(notificationId);

        if (!notification) {
            throw new NoticationNotFound();
        }

        notification.read();

        await this.notificationsRepository.save(notification)
    }
}