'use strict';

const Client = require('./client');
const Batches = require('./batches');

class Emailable {

  constructor(apiKey) {
    this.client = new Client(apiKey);
    this.batches = new Batches(this.client);
  }

  verify(email, options = {}) {
    var params = Object.assign({ email: email }, options);

    return this.client.makeRequest('get', 'verify', params);
  }

  account() {
    return this.client.makeRequest('get', 'account');
  }

}

module.exports = apiKey => new Emailable(apiKey);
