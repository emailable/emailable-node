export class Client {
  constructor(key: string);

  makeGetRequest(endpoint: string, params?: object): Promise<any>;

  makePostRequest(endpoint: string, data?: object): Promise<any>;
}

export class Batches {
  constructor(client: Client);

  verify(emails: string[], options?: object): Promise<any>;

  status(id: string, options?: object): Promise<any>;
}

export class Emailable {
  constructor(apiKey: string);

  verify(email: string, options?: object): Promise<any>;

  account(): Promise<any>;

  readonly batches: Batches;
}

export default Emailable;
