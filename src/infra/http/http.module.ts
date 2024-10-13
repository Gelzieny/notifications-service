import { Module } from "@nestjs/common";
import { NotificationController } from "./controllers/notification.controller";
import { SendNotification } from "@application/user-cases/send-notifications";
import { DatabaseModule } from "../database/database.module";
import { CancelNotification } from "@application/user-cases/cancel-notification";
import { ReadNotification } from "@application/user-cases/read-notifications";
import { UnReadNotification } from "@application/user-cases/unread-notifications";
import { CountRecipientNotification } from "@application/user-cases/count-recipient-notifications";
import { GetRecipientNotification } from "@application/user-cases/get-recipient-notifications";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationController],
    providers: [
        SendNotification,
        CancelNotification,
        ReadNotification,
        UnReadNotification,
        CountRecipientNotification,
        GetRecipientNotification
    ]
})

export class HttpModule { }