import React from 'react'
import StyleValidator from './StyleValidator'

export const __styleValidator = new StyleValidator()

export function configStyleValidator(config) {
  __styleValidator.setConfig(config)
}

export default {
  style(props, propName, componentName, ...rest) {
    const objErr = React.PropTypes.object(props, propName, componentName, ...rest)
    if (objErr) {
      return objErr
    }
    return __styleValidator.validate(props[propName], componentName)
  },
}
