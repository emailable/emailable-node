'use strict';

const expect = require('chai').expect;
const blazeverify = require('../lib/blazeverify')('test_7aff7fc0142c65f86a00')
const emails = ['deliverable@example.com', 'undeliverable@example.com']

describe('blazeverify.batches.create()', () => {

	it('should create a new batch', done => {
    blazeverify.batches.verify(emails).then(response => {
    	expect(response.id).to.have.lengthOf(24);
    	done();
    });
  });

});

describe('blazeverify.batches.status()', () => {

  it('should return the status of a batch', function (done) {
    this.timeout(5000);

    blazeverify.batches.verify(emails).then(response => {
      blazeverify.batches.status(response.id).then(response => {
        expect(response.emails).to.not.be.a('null');
        expect(response.total_counts).to.not.be.a('null');
        expect(response.reason_counts).to.not.be.a('null');
        expect(response.message).to.not.be.a('null');
        done();
      });
    });
  });

});
