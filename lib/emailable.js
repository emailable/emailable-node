'use strict'

const Client = require('./client')
const Batches = require('./batches')

class Emailable {

  constructor(apiKey = null) {
    this.client = new Client(apiKey)
    this.batches = new Batches(this.client)
  }

  verify(email, options = {}) {
    return this.client.makePostRequest('verify', { email: email, ...options })
  }

  account(options = {}) {
    return this.client.makeGetRequest('account', options)
  }

}

module.exports = apiKey => new Emailable(apiKey)
