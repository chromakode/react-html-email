import React from 'react'
import Box from './Box'
import Email from './Email'
import Image from './Image'
import Item from './Item'
import Span from './Span'
import A from './A'
import injectReactEmailAttributes from './injectReactEmailAttributes'
import renderEmail from './renderEmail'
import StyleValidator from './StyleValidator'

const styleValidator = new StyleValidator()
const PropTypes = {
  style(props, propName, componentName) {
    const objErr = React.PropTypes.object(props, propName, componentName)
    if (objErr) {
      return objErr
    }
    return styleValidator.validate(props[propName], componentName)
  },
}
function configStyleValidator(config) {
  styleValidator.setConfig(config)
}

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
  styleValidator as __styleValidator,
}
