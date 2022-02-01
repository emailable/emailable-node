'use strict';

const expect = require('chai').expect;
const emailable = require('../lib/emailable')('test_7aff7fc0142c65f86a00')
const emails = ['deliverable@example.com', 'undeliverable@example.com']

describe('emailable.batches.verify()', () => {

  it('should create a new batch', done => {
    emailable.batches.verify(emails).then(response => {
      expect(response.id).to.have.lengthOf(24);
      done();
    });
  });

  it('should return a payment error when passed { simulate: "payment_error" }', done => {
    emailable.batches.verify(emails, { simulate: 'payment_error' }).catch(error => {
      expect(error.code).to.be.equal(402)
      done();
    });
  });

});

describe('emailable.batches.status()', () => {

  it('should return the status of a batch', done => {
    emailable.batches.verify(emails).then(response => {
      emailable.batches.status(response.id).then(response => {
        expect(response.emails).to.be.an('array');
        expect(response.total_counts).to.be.a('object');
        expect(response.reason_counts).to.be.a('object');
        expect(response.message).to.be.a('string');
        done();
      });
    });
  });

  it('should return verifying response when passed { simulate: "verifying" }', done => {
    emailable.batches.verify(emails).then(response => {
      emailable.batches.status(response.id, { simulate: 'verifying' }).then(response => {
        expect(response.processed).to.be.a('number');
        expect(response.total).to.be.a('number');
        expect(response.message).to.be.a('string');
        done();
      });
    });
  });

});
