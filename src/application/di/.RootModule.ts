import { Module } from '@nestjs/common';

import { AuthModule } from '@application/di/AuthModule';
import { InfrastructureModule } from '@application/di/InfrastructureModule';
import { UserModule } from '@application/di/UserModule';

@Module({
  imports: [
    InfrastructureModule,
    AuthModule,
    UserModule,
  ]
})

export class RootModule {}