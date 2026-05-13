# Emailable Node Library

[![Version](https://img.shields.io/npm/v/emailable.svg)](https://www.npmjs.org/package/emailable)
![Build Status](https://github.com/emailable/emailable-node/actions/workflows/ci.yml/badge.svg)
[![Downloads](https://img.shields.io/npm/dm/emailable.svg)](https://www.npmjs.com/package/emailable)

This is the official node wrapper for the Emailable API.

## Documentation

See the [Node API docs](https://emailable.com/docs/api/emails/?code_language=javascript).

## Installation

Install the package with:

```sh
npm install emailable --save
# or
pnpm add emailable
# or
yarn add emailable
```

## Usage

### Authentication

The Emailable API requires either an API key or an access token for
authentication. API keys can be created and managed in the
[Emailable Dashboard](https://app.emailable.com/api).

An API key can be set globally for the Emailable client:

```javascript
// Global: Common JS import
const emailable = require('emailable')('YOUR_API_KEY');

// Global: ES6 import
import Emailable from 'emailable';
const emailable = Emailable('YOUR_API_KEY');
```

Or, you can specify an `apiKey` or an `accessToken` with each request:

```javascript
// set api_key at request time
emailable.verify({ apiKey: 'YOUR_API_KEY' })

// set access_token at request time
emailable.verify({ accessToken: 'YOUR_API_KEY' })
```

### Verification

```javascript
// verify an email address
emailable.verify('jarrett@emailable.com')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
```

#### Additional options

You can also pass any of the additional
[options](https://emailable.com/docs/api/emails/?code_language=javascript#verify-an-email)
as a second parameter to `verify`.

```javascript
emailable.verify('jarrett@emailable.com', { timeout: 10 })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
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
const emails = ['jarrett@emailable.com', 'support@emailable.com', ...];

emailable.batches.verify(emails)
  .then((response) => {
    console.log(response.id);
  });
```

##### Additional options

You can also pass any of the additional
[options](https://emailable.com/docs/api/emails/?code_language=javascript#verify-a-batch-of-emails)
as a second parameter to `verify`.

```javascript
emailable.batches.verify(emails, { url: 'https://emailable.com/' })
  .then((response) => {
    console.log(response.id);
  });
```

#### Get the status / results of a batch

Calling `batches.status` with the batch id will return the batch's status.
This will also return the results once the batch is complete.

```javascript
const id = '5cfcbfdeede34200693c4319';

emailable.batches.status(id)
  .then((response) => {
    console.log(response);
  });
```

## Development

Run all tests:

```sh
$ pnpm install
$ pnpm test
```

Run a single test suite without a coverage report:

```sh
$ pnpm test test/verify.spec.js
```

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/emailable/emailable-node.
