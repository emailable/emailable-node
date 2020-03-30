'use strict';

class Batches {

  constructor(client) {
    this.client = client
  }

  verify(emails, callbackURL) {
    return this.client.makeRequest(
      'post', 'batch', { emails: emails.join(','), url: callbackURL }, (response) => {
        var parsedBody = JSON.parse(response);
        if (Object.keys(parsedBody).length == 1) return parsedBody;
        return parsedBody.id;
      }
    );
  }

  status(id) {
    return this.client.makeRequest('get', 'batch', { id: id });
  }

}

module.exports = Batches;
