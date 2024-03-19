'use strict'

const Client = require('./client')
const Batches = require('./batches')

class Emailable {

  constructor(apiKey) {
    this.client = new Client(apiKey)
    this.batches = new Batches(this.client)
  }

  verify(email, options = {}) {
    return this.client.makePostRequest('verify', { email: email, ...options })
  }

  account() {
    return this.client.makeGetRequest('account')
  }

}

module.exports = apiKey => new Emailable(apiKey)
