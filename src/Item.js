import React, { PropTypes } from 'react'
import EmailPropTypes from './PropTypes'

export default function Item(props) {
  return (
    <tr>
      <td align={props.align} valign={props.valign} bgcolor={props.bgcolor} style={props.style}>
        {props.children}
      </td>
    </tr>
  )
}

Item.propTypes = {
  bgcolor: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: EmailPropTypes.style,
  children: PropTypes.node,
}
