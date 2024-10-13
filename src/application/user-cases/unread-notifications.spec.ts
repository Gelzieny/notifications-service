import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { NoticationNotFound } from "./errors/notication-not-found";
import { makeNotification } from "@test/factories/notification-factory";
import { UnReadNotification } from "./unread-notifications";

describe('UnRead notification', () => {
    it('should be able to unread a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const unreadNotification = new UnReadNotification(notificationsRepository);

        const notification = makeNotification({
            readAt: new Date()
        });

        await notificationsRepository.create(notification);

        await unreadNotification.execute({
            notificationId: notification.id
        });

        expect(notificationsRepository.notifications[0].readAt).toBeNull()
    });

    it('should not be able to read a non notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const unreadNotification = new UnReadNotification(notificationsRepository);

        expect(() => {
            return unreadNotification.execute({
                notificationId: 'fake-notification-id'
            });
        }).rejects.toThrow(NoticationNotFound);
    });
});
