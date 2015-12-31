import React from 'react'

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
  bgcolor: React.PropTypes.string,
  align: React.PropTypes.oneOf(['left', 'center', 'right']),
  valign: React.PropTypes.oneOf(['top', 'middle', 'bottom']),
  style: React.PropTypes.object,
  children: React.PropTypes.node,
}
