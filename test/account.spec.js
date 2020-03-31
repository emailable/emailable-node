'use strict';

const expect = require('chai').expect;
const blazeverify = require('../lib/blazeverify')('test_7aff7fc0142c65f86a00')

describe('blazeverify.account()', () => {

	it('should return account information', done => {
		blazeverify.account().then(response => {
			expect(response.owner_email).to.not.be.a('null');
			expect(response.available_credits).to.not.be.a('null');
			done();
		});
	});

	it('should return a 401 status code when an invalid API key', done => {
		require('../lib/blazeverify')().account().catch(error => {
			expect(error.code).to.be.equal(401);
			done();
		});
	});

});
