import PropTypes, { configStyleValidator, __styleValidator } from './PropTypes'
import Box from './components/Box'
import Email from './components/Email'
import Image from './components/Image'
import Item from './components/Item'
import Span from './components/Span'
import A from './components/A'
import injectReactEmailAttributes from './injectReactEmailAttributes'
import renderEmail from './renderEmail'

const __DEV__ = typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production'

configStyleValidator({
  warn: __DEV__,
})

export {
  PropTypes,
  Box,
  Email,
  Image,
  Item,
  Span,
  A,
  injectReactEmailAttributes,
  configStyleValidator,
  renderEmail,
}

export default {
  PropTypes,
  injectReactEmailAttributes,
  configStyleValidator,
  renderEmail,
  __styleValidator,
}
