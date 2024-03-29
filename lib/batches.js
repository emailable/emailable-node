'use strict'

class Batches {

  constructor(client) {
    this.client = client
  }

  verify(emails, options = {}) {
    return this.client.makePostRequest(
      'batch', { emails: emails.join(','), ...options }
    )
  }

  status(id, options = {}) {
    return this.client.makeGetRequest('batch', { id: id, ...options })
  }

}

module.exports = Batches
