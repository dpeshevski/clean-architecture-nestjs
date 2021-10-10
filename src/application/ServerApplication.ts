import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

import { RootModule } from '@application/di/.RootModule';
import { ApiServerConfig } from '@infrastructure/config/ApiServerConfig';

export class ServerApplication {
  private readonly host: string = ApiServerConfig.HOST;
  private readonly port: number = ApiServerConfig.PORT;
  public async run(): Promise<void> {
    const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(RootModule);

    this.log();

    await app.listen(this.port, this.host);
  }

  private log(): void {
    Logger.log(`Server started on host: ${this.host}; port: ${this.port};`, ServerApplication.name);
  }

  public static new(): ServerApplication {
    return new ServerApplication();
  }
}