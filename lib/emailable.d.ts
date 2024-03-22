declare class Client {
  constructor(key: string)

  makeGetRequest(endpoint: string, params?: {}): Promise<any>

  makePostRequest(endpoint: string, data?: {}): Promise<any>
}

declare class Batches {
  constructor(client: Client)

  verify(emails: string[], options?: {}): Promise<any>

  status(id: string, options?: {}): Promise<any>
}

declare class Emailable {
  constructor(apiKey: string)

  verify(email: string, options?: {}): Promise<any>

  account(): Promise<any>

  readonly client: Client
  readonly batches: Batches
}

declare function _exports(apiKey: any): Emailable
export = _exports
