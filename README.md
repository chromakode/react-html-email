# react-html-email

[![Build Status](https://img.shields.io/travis/chromakode/react-html-email/master.svg?style=flat-square)](https://travis-ci.org/chromakode/react-html-email)
[![Coverage Status](https://img.shields.io/coveralls/chromakode/react-html-email/master.svg?style=flat-square)](https://coveralls.io/github/chromakode/react-html-email?branch=master)

Modern HTML emails are a tangle of archaic HTML and inline styles. This library encapsulates the cruft into simple React components and helps avoid common pitfalls.

[react-html-email](https://github.com/chromakode/react-html-email) provides a set of components for a standard 600px table layout (inspired by [HTML Email Boilerplate](https://github.com/seanpowell/Email-Boilerplate)). React's [Supported Tags and Attributes](http://facebook.github.io/react/docs/tags-and-attributes.html) are extended to include a few deprecated attributes useful for legacy clients. In addition, a `style` prop validator is included which uses [Campaign Monitor's CSS Support Guide](https://www.campaignmonitor.com/css/) to check for potential compatibility issues across email clients.

## Installation

    $ npm install react-html-email

## Usage

Import the library and set up React:

```js
import ReactHTMLEmail from 'react-html-email'

// set up React to support a few HTML attributes useful for legacy clients
ReactHTMLEmail.injectReactEmailAttributes()
```

To render a simple email:

```js
import { Email, Item, Span, A, renderEmail } from 'react-html-email'

renderEmail(
  <Email title="Hello World!">
    <Item align="center">
      <Span fontSize={20}>
        This is an example email made with:
        <A href="https://github.com/chromakode/react-html-email">react-html-email</A>.
      </Span>
    </Item>
  </Email>
)
```

You can find more examples in the [examples directory](https://github.com/chromakode/react-html-email/tree/master/examples) of the repo.


## API

### `renderEmail(emailComponent)`

Render an email component to an HTML string. Adds an XHTML 1.0 Strict doctype, as per [HTML Email Boilerplate](https://github.com/seanpowell/Email-Boilerplate).

### `injectReactEmailAttributes()`

React ignores some attributes we need, such as the table `align` and `valign` properties. Call this function to expand React's attribute repertoire before using email components from the library.

### `configStyleValidator(config)`

By default, inline styles passed to the `style` prop will be validated against [Campaign Monitor's CSS Support Guide](https://www.campaignmonitor.com/css/). Here are the default settings, which can be overridden using `configStyleValidator`:

```js
ReactHTMLEmail.configureStyleValidator({
  // When strict, incompatible style properties will result in an error.
  strict: true,
  
  // Whether to warn when compatibility notes for a style property exist.
  warn: true,
  
  // Platforms to consider for compatibility checks.
  platforms: [
    'gmail',
    'gmail-android',
    'apple-mail',
    'apple-ios',
    'yahoo-mail',
    'outlook',
    'outlook-legacy',
    'outlook-web',
  ],
})
```

## License

[MIT](https://github.com/chromakode/react-html-email/blob/master/LICENSE)
