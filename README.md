# Emailable Node Library

[![Version](https://img.shields.io/npm/v/emailable.svg)](https://www.npmjs.org/package/emailable)
[![Build Status](https://travis-ci.com/emailable/emailable-node.svg)](https://travis-ci.com/emailable/emailable-node)
[![Maintainability](https://api.codeclimate.com/v1/badges/2d74c69a9155109058a7/maintainability)](https://codeclimate.com/github/emailable/emailable-node/maintainability)
[![Downloads](https://img.shields.io/npm/dm/emailable.svg)](https://www.npmjs.com/package/emailable)
[![Try on RunKit](https://badge.runkitcdn.com/emailable.svg)](https://runkit.com/npm/emailable)

This is the official node wrapper for the Emailable API.

## Documentation

See the [Node API docs](https://emailable.com/docs/api/?javascript).

## Installation

Install the package with:

```sh
npm install emailable --save
# or
yarn add emailable
```

## Usage

The library needs to be configured with your account's API key which is available in your [Emailable Dashboard](https://app.emailable.com/api). Require it with your API key:

### Setup

```javascript
// require with api key
var emailable = require('emailable')('live_...')
```

### Verification

```javascript
// verify an email address
emailable.verify('jarrett@emailable.com')
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
var emails = ['jarrett@emailable.com', 'support@emailable.com', ...]
emailable.batches.verify(emails)
  .then(function (response) {
    console.log(response.id);
  });

// you can optionally pass in a callback url that we'll POST to when the
// batch is complete.
emailable.batches.verify(emails, 'https://emailable.com/'}).then(function (response) {
  console.log(response.id);
});
```

#### Get the status / results of a batch

Calling `batches.status` with the batch id will return the batch's status.
This will also return the results once the batch is complete.

```javascript
var id = '5cfcbfdeede34200693c4319'
emailable.batches.status(id)
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

Bug reports and pull requests are welcome on GitHub at https://github.com/emailable/emailable-node.
