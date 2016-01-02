import React, { PropTypes } from 'react'
import EmailPropTypes from '../PropTypes'

export default function Span(props) {
  return (
    <span style={{
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      lineHeight: (props.lineHeight !== undefined ? props.lineHeight : props.fontSize) + 'px',
      color: props.color,
      ...props.style,
    }}>{props.children}</span>
  )
}

Span.propTypes = {
  fontFamily: PropTypes.string,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.number,
  color: PropTypes.string,
  style: EmailPropTypes.style,
  children: PropTypes.node,
}

Span.defaultProps = {
  fontFamily: 'sans-serif',
  fontSize: 14,
  color: '#000',
}
