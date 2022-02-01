'use strict';

const expect = require('chai').expect;
const emailable = require('../lib/emailable')('test_7aff7fc0142c65f86a00')

describe('emailable.account()', () => {

  it('should return account information', done => {
    emailable.account().then(response => {
      expect(response.owner_email).to.be.a('string');
      expect(response.available_credits).to.be.a('number');
      done();
    });
  });

  it('should return a 401 status code when an invalid API key', done => {
    require('../lib/emailable')().account().catch(error => {
      expect(error.code).to.be.equal(401);
      done();
    });
  });

});
