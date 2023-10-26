import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import configuration from 'config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }])
  ],
})
export class GlobalModule {}
