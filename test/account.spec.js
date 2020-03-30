'use strict';

const expect = require('chai').expect;
const blazeverify = require('../lib/blazeverify')('test_7aff7fc0142c65f86a00')

describe('blazeverify.account()', function () {

	it('should return account information', function (done) {
		blazeverify.account().then(function (response) {
			expect(response.owner_email).to.not.be.a('null');
			expect(response.available_credits).to.not.be.a('null');
			done();
		});
	});

});
