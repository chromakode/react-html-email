import React from 'react'
import PropTypes from 'prop-types'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'

export default function Row(props) {
  return (
    <tr
      {...includeDataProps(props)}
      className={props.className}
      align={props.align}
      valign={props.valign}
      bgcolor={props.bgcolor}
      style={props.style}
    >
      {props.children}
    </tr>
  )
}

Row.propTypes = {
  className: PropTypes.string,
  bgcolor: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: EmailPropTypes.style,
  children: PropTypes.node,
}

Row.defaultProps = {
  children: null,
  className: null,
  bgcolor: null,
  align: 'center',
  valign: 'top',
  style: null,
}
