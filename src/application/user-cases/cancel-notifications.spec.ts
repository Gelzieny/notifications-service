import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";
import { Notification } from "@application/entities/notifications";
import { Content } from "@application/entities/content";
import { rejects } from "assert";
import { NoticationNotFound } from "./errors/notication-not-found";

describe('Cancel notification', () => {
    it('should be able to send a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        const notification = new Notification({
            content: new Content('Nova notificação'),
            category: "teste",
            recipientId: 'example-recipient-id'
        })

        await notificationsRepository.create(notification);

        await cancelNotification.execute({
            notificationId: notification.id
        });

        expect(notificationsRepository.notifications[0].canceledAt).toEqual(
            expect.any(Date)
        );
    });

    it('should not be able to cancel a non notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        expect(() => {
            return cancelNotification.execute({
                notificationId: 'fake-notification-id'
            });
        }).rejects.toThrow(NoticationNotFound);
    });
});
