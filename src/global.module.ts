import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import configuration from 'config';
import { AllExceptionsFilter } from 'exception';
import { AuthGuard } from 'guards';

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
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    }
  ]
})
export class GlobalModule {}
