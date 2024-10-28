import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { OpenaiModule } from './openai/openai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    OpenaiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
