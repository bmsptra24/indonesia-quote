import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { V1Controller } from './v1/v1.controller';

@Module({
  imports: [],
  controllers: [AppController, V1Controller],
  providers: [AppService],
})
export class AppModule {}
