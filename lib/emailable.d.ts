import Client = require("./client");
import Batches = require("./batches");

declare class Emailable {
  constructor(apiKey: string);
  client: Client;
  batches: Batches;
  verify(email: string, options?: {}): Promise<any>;
  account(): Promise<any>;
}

declare function _exports(apiKey: string): Emailable;
export = _exports;
