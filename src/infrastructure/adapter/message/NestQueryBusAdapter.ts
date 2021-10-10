import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

import { QueryBusPort } from '@core/common/port/message/QueryBusPort';

@Injectable()
export class NestQueryBusAdapter implements QueryBusPort {
  constructor(private readonly queryBus: QueryBus) {}

  public async sendQuery<TQuery, TQueryResult>(query: TQuery): Promise<TQueryResult> {
    return this.queryBus.execute(query);
  }
}