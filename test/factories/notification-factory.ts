import { Content } from "@application/entities/content";
import { Notification, NotificationProps } from "@application/entities/notifications";

type Overrider = Partial<NotificationProps>

export function makeNotification(overrider: Overrider = {}) {
    return new Notification({
        content: new Content('Nova notificação'),
        category: "teste",
        recipientId: 'recipient-2',
        ...overrider
    });
}