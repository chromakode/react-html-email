import PropTypes, { configStyleValidator, styleValidator } from './PropTypes'
import Box from './components/Box'
import Email from './components/Email'
import Image from './components/Image'
import Item from './components/Item'
import Row from './components/Row'
import Col from './components/Col'
import Span from './components/Span'
import A from './components/A'
import renderEmail from './renderEmail'

const DEV = typeof process !== 'undefined' && process.env && process.env.NODE_ENV !== 'production'

configStyleValidator({
  warn: DEV,
})

export {
  PropTypes,
  Box,
  Email,
  Image,
  Item,
  Row,
  Col,
  Span,
  A,
  configStyleValidator,
  renderEmail,
}

export default {
  PropTypes,
  configStyleValidator,
  renderEmail,
  styleValidator,
}
