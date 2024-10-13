import { Notification } from "@application/entities/notifications";

export class NotificationViewModel {
    static toHTTP(notification: Notification) {
        return {
            content: notification.content.value,
            category: notification.category,
            recipientId: notification.recipientId,
            createdAt: notification.createdAt
        }
    }
}