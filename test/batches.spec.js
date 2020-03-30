'use strict';

const expect = require('chai').expect;
const blazeverify = require('../lib/blazeverify')('test_7aff7fc0142c65f86a00')

describe('blazeverify.batches.create()', () => {

  before(() => {
    this.emails = ['deliverable@example.com', 'undeliverable@example.com']
  });

	it('should create a new batch', (done) => {
    blazeverify.batches.verify(this.emails).then((id) => {
    	expect(id).to.have.lengthOf(24);
    	done();
    });
  });

});

describe('blazeverify.batches.status()', () => {

  it('should return the status of a batch', (done) => {
    blazeverify.batches.verify(this.emails).then((id) => {
      blazeverify.batches.status(id).then((response) => {
        expect(response.emails).to.not.be.a('null');
        expect(response.total_counts).to.not.be.a('null');
        expect(response.reason_counts).to.not.be.a('null');
        expect(response.message).to.not.be.a('null');
        done();
      });
    });
  });

});
