# react-html-email

[![Build Status](https://img.shields.io/travis/chromakode/react-html-email/master.svg?style=flat-square)](https://travis-ci.org/chromakode/react-html-email)
[![Coverage Status](https://img.shields.io/codecov/c/github/chromakode/react-html-email/master.svg?style=flat-square)](https://codecov.io/github/chromakode/react-html-email?branch=master)
[![npm](https://img.shields.io/npm/v/react-html-email.svg?style=flat-square)](https://www.npmjs.com/package/react-html-email)
[![npm](https://img.shields.io/npm/l/react-html-email.svg?style=flat-square)](https://github.com/chromakode/react-html-email/blob/master/LICENSE)

Modern HTML emails are a tangle of archaic HTML and inline styles. This library encapsulates the cruft into simple React components and helps avoid common pitfalls.

[react-html-email](https://github.com/chromakode/react-html-email) provides a set of components for a standard 600px table layout (inspired by [HTML Email Boilerplate](https://github.com/seanpowell/Email-Boilerplate)). React's [Supported Tags and Attributes](http://facebook.github.io/react/docs/tags-and-attributes.html) are extended to include a few deprecated attributes useful for legacy clients. In addition, a `style` prop validator is included which uses [Campaign Monitor's CSS Support Guide](https://www.campaignmonitor.com/css/) to check for potential compatibility issues across email clients.

## Installation

    $ npm install react-html-email

## Usage

To render a simple email:

```js
import { Email, Item, Span, A, renderEmail } from 'react-html-email'

const emailHTML = renderEmail(
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

### `configStyleValidator(config)`

By default, inline styles passed to the `style` prop will be validated against [Campaign Monitor's CSS Support Guide](https://www.campaignmonitor.com/css/). Here are the default settings, which can be overridden using `configStyleValidator`:

```js
ReactHTMLEmail.configStyleValidator({
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

### `PropTypes.style`

A PropTypes validator for checking email inline style compatibility. Used by default in the components below. Exported for use in your own components.

## Components

Components in `react-html-email` include defaults for basic style properties, so that client styles are reset and normalized. Every component accepts a `style` prop which overrides the reset styles.

### `<Email>`

An HTML document with a centered 600px `<table>` inside `<table>` container based on [HTML Email Boilerplate](https://github.com/seanpowell/Email-Boilerplate).

It's necessary to always include a `title` prop for some clients' "open in browser" feature.

See [MailChimp's HTML guide](http://templates.mailchimp.com/development/html/) for how this works.

### `<Box>`

A simplification of the `<table>` element, the workhorse of an HTML email design. `<Box>`es contain a vertical stack of `<Item>`s. Use them to create visual structure, filled buttons, and spacing.

### `<Item>`

A subsection of a `<Box>`, essentially a `<tr><td>` unit.

### `<Span>`

Use to assign styles to text.

It can be handy to create an object containing your default text styles for reuse. For example:

```js
const textStyles = {
  fontFamily: 'Verdana',
  fontSize: 42,
  fontWeight: 'bold',
  color: 'orange',
}

[...]

<Span {...textDefaults}>Congratulations!</Span>
<Span {...textDefaults}>You won a free cruise!</Span>
```

### `<A>`

Use to format links. Requires an `href` prop. Always sets `target="_blank"` and defaults to underline. To remove the underline, set `textDecoration="none"`.

### `<Image>`

An image, without any pesky borders, outlines, or underlines by default. Requires a `src` prop, and `width` and `height` to be set. You can override the default styles (such as adding a border) using the `style` prop.

## Head CSS and Media Queries
You can pass a string prop `headCSS` to your `<Email>` component. You can see it in our [kitchenSink.js](https://github.com/chromakode/react-html-email/blob/master/examples/kitchenSink.js) example.

## Mailchimp attributes
If you're using Mailchimp and need to add their custom `mc:edit` attributes to your markup, we recommend using the [mailchimpify](http://github.com/Roilan/mailchimpify) module.

## License

[MIT](https://github.com/chromakode/react-html-email/blob/master/LICENSE)
