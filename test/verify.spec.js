'use strict';

const expect = require('chai').expect;
const emailable = require('../lib/emailable')('test_7aff7fc0142c65f86a00')

describe('emailable.verify()', () => {

  it('should verify an email', done => {
    emailable.verify('deliverable@example.com').then(response => {
      expect(response.domain).to.be.a('string');
      expect(response.email).to.be.a('string');
      expect(response.reason).to.be.a('string');
      expect(response.score).to.be.a('number');;
      expect(response.state).to.be.a('string');
      expect(response.user).to.be.a('string');
      expect(response.duration).to.be.a('number');
      done();
    });
  });

  it('should return a valid state', done => {
    var states = ['deliverable', 'undeliverable', 'risky', 'unknown'];
    emailable.verify('deliverable@example.com').then(response => {
      expect(states.includes(response.state)).to.be.equal(true);
      done();
    });
  });

  it('should verify an email with accept-all enabled', done => {
    emailable.verify('accept-all@example.com', { accept_all: true })
      .then(response => {
        expect(response.accept_all).to.be.equal(true);
        done();
      });
  });

});
