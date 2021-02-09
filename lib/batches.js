'use strict';

class Batches {

  constructor(client) {
    this.client = client
  }

  verify(emails, callbackURL) {
    return this.client.makePostRequest(
      'post', 'batch', { emails: emails.join(','), url: callbackURL }
    );
  }

  status(id) {
    return this.client.makeRequest('get', 'batch', { id: id });
  }

}

module.exports = Batches;
