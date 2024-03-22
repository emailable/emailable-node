declare class Client {
  constructor(key: any);
  instance: any;
  makeGetRequest(endpoint: string, params?: {}): Promise<any>;
  makePostRequest(endpoint: string, data?: {}): Promise<any>;
}

export = Client;