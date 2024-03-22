import Client from './client';

declare class Batches {
  constructor(client: Client);
  client: Client;
  verify(emails: any, options?: {}): Promise<any>;
  status(id: any, options?: {}): Promise<any>;
}

export = Batches;