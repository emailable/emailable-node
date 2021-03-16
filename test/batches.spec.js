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

});

describe('emailable.batches.status()', () => {

  it('should return the status of a batch', done => {
    emailable.batches.verify(emails).then(response => {
      emailable.batches.status(response.id).then(response => {
        expect(response.emails).to.not.be.a('null');
        expect(response.total_counts).to.not.be.a('null');
        expect(response.reason_counts).to.not.be.a('null');
        expect(response.message).to.not.be.a('null');
        done();
      });
    });
  });

});
