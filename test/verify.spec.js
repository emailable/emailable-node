'use strict';

const expect = require('chai').expect;
const blazeverify = require('../lib/blazeverify')('test_7aff7fc0142c65f86a00')

describe('blazeverify.verify()', () => {

  it('should verify an email', done => {
    blazeverify.verify('deliverable@example.com').then(response => {
      expect(response.domain).to.not.be.a('null');
      expect(response.email).to.not.be.a('null');
      expect(response.reason).to.not.be.a('null');
      expect(response.score).to.not.be.a('null');
      expect(response.state).to.not.be.a('null');
      expect(response.user).to.not.be.a('null');
      expect(response.duration).to.not.be.a('null');
      done();
    });
  });

  it('should return a valid state', done => {
    var states = ['deliverable', 'undeliverable', 'risky', 'unknown'];
    blazeverify.verify('deliverable@example.com').then(response => {
      expect(states.includes(response.state)).to.be.equal(true);
      done();
    });
  });

  it('should verify an email with accept-all enabled', done => {
    blazeverify.verify('accept-all@example.com', { accept_all: true })
      .then(response => {
        expect(response.accept_all).to.be.equal(true);
        done();
      });
  });

});
