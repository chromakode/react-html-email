import React, { Children, PropTypes } from 'react'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'

export default function Items(props) {
  return (
    <tr>
      {Children.map(child => (
        <td {...includeDataProps(props)} align={props.align} valign={props.valign} bgcolor={props.bgcolor} style={props.style}>
            {child}
        </td>
      ))}
    </tr>
  )
}

Items.propTypes = {
  bgcolor: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: EmailPropTypes.style,
  children: PropTypes.node,
}
