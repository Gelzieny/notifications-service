import { Module } from "@nestjs/common";
import { NotificationController } from "./controllers/notification.controller";
import { SendNotification } from "@application/user-cases/send-notifications";
import { DatabaseModule } from "../database/database.module";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationController],
    providers: [SendNotification]
})

export class HttpModule { }