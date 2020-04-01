# Blaze Verify Node Library

[![Version](https://img.shields.io/npm/v/blazeverify.svg)](https://www.npmjs.org/package/blazeverify)
[![Build Status](https://travis-ci.com/blazeverify/blazeverify-node.svg)](https://travis-ci.com/blazeverify/blazeverify-node)
[![Maintainability](https://api.codeclimate.com/v1/badges/2d74c69a9155109058a7/maintainability)](https://codeclimate.com/github/blazeverify/blazeverify-node/maintainability)
[![Downloads](https://img.shields.io/npm/dm/blazeverify.svg)](https://www.npmjs.com/package/blazeverify)
[![Try on RunKit](https://badge.runkitcdn.com/blazeverify.svg)](https://runkit.com/npm/blazeverify)

This is the official node wrapper for the Blaze Verify API.

## Documentation

See the [Node API docs](https://blazeverify.com/docs/api/?javascript).

## Installation

Install the package with:

```sh
npm install blazeverify --save
# or
yarn add blazeverify
```

## Usage

The library needs to be configured with your account's API key which is available in your [Blaze Verify Dashboard](https://app.blazeverify.com/api). Require it with your API key:

### Setup

```javascript
// require with api key
var blazeverify = require('blazeverify')('live_...')
```

### Verification

```javascript
// verify an email address
blazeverify.verify('jarrett@blazeverify.com')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

#### Slow Email Server Handling

Some email servers are slow to respond. As a result the timeout may be reached
before we are able to complete the verification process. If this happens, the
verification will continue in the background on our servers. We recommend
sleeping for at least one second and trying your request again. Re-requesting
the same verification with the same options will not impact your credit
allocation within a 5 minute window.

```javascript
{
    message: 'Your request is taking longer than normal. Please send your request again.'
}
```

### Batch Verification

#### Start a batch

```javascript
var emails = ['jarrett@blazeverify.com', 'support@blazeverify.com', ...]
blazeverify.batches.create(emails)
  .then(function (response) {
    console.log(response.id);
  });

// you can optionally pass in a callback url that we'll POST to when the
// batch is complete.
blazeverify.batches.create(emails, 'https://blazeverify.com/'}).then(function (response) {
  console.log(response.id);
});
```

#### Get the status / results of a batch

Calling `batches.status` with the batch id will return the batch's status.
This will also return the results once the batch is complete.

```javascript
var id = '5cfcbfdeede34200693c4319'
blazeverify.batches.status(id)
  .then(function (response) {
    console.log(response);
  });
```

## Development

Run all tests:

```sh
$ yarn install
$ yarn test
```

If you do not have `yarn` installed, you can get it with `npm install --global yarn`.

Run a single test suite without a coverage report:

```sh
$ yarn test test/verify.spec.js
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/blazeverify/blazeverify-node.
