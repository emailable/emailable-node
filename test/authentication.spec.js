'use strict'

const expect = require('chai').expect
const apiKey = 'test_7aff7fc0142c65f86a00'
const email = 'jarrett@emailable.com'
const emails = ['jarrett@emailable.com', 'support@emailable.com']

describe('authentication', () => {

  it('should authenticate with a global api key configured', done => {
    const emailable = require('../lib/emailable')(apiKey)

    Promise.all([
      emailable.verify(email).then(response => {
        expect(response.domain).to.be.a('string')
      }),

      emailable.account().then(response => {
        expect(response.owner_email).to.be.a('string')
      }),

      emailable.batches.verify(emails)
        .then(response => {
          expect(response.id).to.have.lengthOf(24)
          return emailable.batches.status(response.id)
        })
        .then(statusResponse => {
          expect(statusResponse.id).to.be.a('string')
        })
    ])
      .then(() => done())
      .catch(done)
  })

  it('should authenticate with an api key passed in at request time', done => {
    const emailable = require('../lib/emailable')()

    Promise.all([
      emailable.verify(email, { apiKey: apiKey }).then(response => {
        expect(response.domain).to.be.a('string')
      }),

      emailable.account({ apiKey: apiKey }).then(response => {
        expect(response.owner_email).to.be.a('string')
      }),

      emailable.batches.verify(emails, { apiKey: apiKey })
        .then(response => {
          expect(response.id).to.have.lengthOf(24)
          return emailable.batches.status(response.id, { apiKey: apiKey })
        })
        .then(statusResponse => {
          expect(statusResponse.id).to.be.a('string')
        })
    ])
      .then(() => done())
      .catch(done)
  })

  it('should prioritize request time authentication over global', done => {
    const emailable = require('../lib/emailable')('invalid_api_key')

    Promise.all([
      emailable.verify(email, { apiKey: apiKey }).then(response => {
        expect(response.domain).to.be.a('string')
      }),

      emailable.account({ apiKey: apiKey }).then(response => {
        expect(response.owner_email).to.be.a('string')
      }),

      emailable.batches.verify(emails, { apiKey: apiKey })
        .then(response => {
          expect(response.id).to.have.lengthOf(24)
          return emailable.batches.status(response.id, { apiKey: apiKey })
        })
        .then(statusResponse => {
          expect(statusResponse.id).to.be.a('string')
        })
    ])
      .then(() => done())
      .catch(done)
  })

  it('should not modify the original params object passed in', done => {
    const emailable = require('../lib/emailable')()
    const params = { apiKey: apiKey }

    Promise.all([
      emailable.verify(email, params).then(() => {
        expect(params.apiKey).to.equal(apiKey)
      }),

      emailable.account(params).then(() => {
        expect(params.apiKey).to.equal(apiKey)
      })
    ])
      .then(() => done())
      .catch(done)
  })

})
