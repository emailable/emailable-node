'use strict';

class Batches {

  constructor(client) {
    this.client = client
  }

  verify(emails, options = {}) {
    return this.client.makePostRequest(
      'post', 'batch', Object.assign({}, { emails: emails.join(',') }, options)
    );
  }

  status(id, options = {}) {
    return this.client.makeRequest(
      'get', 'batch', Object.assign({}, { id: id }, options)
    );
  }

}

module.exports = Batches;
