export interface QueryHandler<TQuery, TResult> {
  handleQuery(query: TQuery): Promise<TResult>;
}