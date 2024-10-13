import { Notification } from "../entities/notifications";

export abstract class NotificationsRepository {
    abstract create(notification: Notification): Promise<void>;
    abstract finById(notificationId: string): Promise<Notification | null>;
    abstract save(notificationId: Notification): Promise<void>;
    abstract countManyByRecipientId(recipientId: string): Promise<number>;
    abstract findManyByRecipientId(recipientId: string): Promise<Notification[]>;
}