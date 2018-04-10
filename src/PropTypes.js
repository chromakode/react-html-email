import PropTypes from 'prop-types'
import StyleValidator from './StyleValidator'

export const styleValidator = new StyleValidator()

export function configStyleValidator(config) {
  styleValidator.setConfig(config)
}

export default {
  style: function style(props, propName, componentName, ...rest) {
    if (props[propName] == null) {
      return undefined
    }
    const objErr = PropTypes.object(props, propName, componentName, ...rest)
    if (objErr) {
      return objErr
    }
    return styleValidator.validate(props[propName], componentName)
  },
}
