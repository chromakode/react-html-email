import React, { PropTypes } from 'react'
import EmailPropTypes from '../PropTypes'
import includeDataProps from '../includeDataProps'

export default function Item(props) {
  return (
    <tr>
      <td {...includeDataProps(props)} className={props.className} align={props.align} valign={props.valign} bgcolor={props.bgcolor} style={props.style} dir={props.dir}>
        {props.children}
      </td>
    </tr>
  )
}

Item.propTypes = {
  className: PropTypes.string,
  bgcolor: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right']),
  valign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: EmailPropTypes.style,
  dir: PropTypes.oneOf(['ltr','rtl']),
  children: PropTypes.node,
}
