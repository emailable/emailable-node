import Client from './client';

declare class Batches {
  constructor(client: Client);
  client: Client;
  verify(emails: string[], options?: {}): Promise<any>;
  status(id: string, options?: {}): Promise<any>;
}

export = Batches;