import { Module } from '@nestjs/common';
import adminInitializer from "./admin.initializer";

@Module({
    imports: [
        adminInitializer().then((r) => r)
    ]
})
export class AdminModule {}
